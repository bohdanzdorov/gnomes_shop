const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userModel = require("../Models/userModel");
const ApiError = require("../Middlewares/apiError");
const productModel = require("../Models/productModel");

class AuthService {

    async registration(userDTO) {

        const emailCandidate = await userModel.findOne({ email: userDTO.email });

        if (emailCandidate) {
            throw new ApiError(422, "Uniqueness error", { email: ["!Current email is already taken!"] })
        }

        userDTO.password = bcrypt.hashSync(userDTO.password, 10);

        const token = jwt.sign({}, process.env.SECRET_USER_ACCESS_TOKEN, { expiresIn: "7200s" })

        const user = await userModel.create({ name: userDTO.name, user_id: Date.now(), password: userDTO.password, email: userDTO.email, phone: userDTO.phone, whishList: [], favoritesList: [] });

        return {
            user_id: user.user_id,
            token: token
        }
    }

    async remove(userDTO) {
        const nameCandidate = await userModel.findOne({ name: userDTO.name });

        if (!nameCandidate) {
            throw new ApiError(422, "Current name or password is incorrect")
        }

        if (!bcrypt.compareSync(userDTO.password, nameCandidate.password)) {
            throw new ApiError(422, "Current name or password is incorrect");
        }

        await userModel.deleteOne({ name: userDTO.name });

        return {
            name: userDTO.name,
            password: userDTO.password
        }
    }

    async updateUserById(newUserDTO){
        const updateCandidate = await userModel.findOne({ user_id: newUserDTO.user_id });

        if (!updateCandidate) {
          throw new ApiError(422, "Invalid user id!");
        }

        await userModel.updateOne({user_id: newUserDTO.user_id}, {name : newUserDTO.name, phone : newUserDTO.phone, email: newUserDTO.email});
    
        return { 
            name : newUserDTO.name,
            email: newUserDTO.email,
            phone: newUserDTO.phone
         }
    }

    async changePassword(userDTO, newPassword) {

        const changeCandidate = await userModel.findOne({ name: userDTO.name });

        if (!changeCandidate) {
            throw new Error("Current name or password is incorrect");
        }

        if (!bcrypt.compareSync(userDTO.password, changeCandidate.password)) {
            throw new ApiError(422, "Current name or password is incorrect");
        }

        newPassword = bcrypt.hashSync(newPassword, 10);

        await userModel.updateOne({ name: userDTO.name }, { password: newPassword });

        return {
            name: changeCandidate.name,
            password: newPassword
        }
    }

    async changeName(userDTO, newName) {

        const newNameCandidate = await userModel.findOne({ name: newName })

        if (newNameCandidate) {
            throw new ApiError(422, "Sorry, this name is already taken")
        }

        const changeCandidate = await userModel.findOne({ name: userDTO.name });

        if (!changeCandidate) {
            throw new ApiError(422, "Current name or password is incorrect");
        }

        if (!bcrypt.compareSync(userDTO.password, changeCandidate.password)) {
            throw new ApiError(422, "Current name or password is incorrect");
        }

        await userModel.updateOne({ name: userDTO.name },
            { name: newName });


        return {
            name: newName,
            password: userDTO.password
        }

    }

    async logIn(userDTO){
        const nameCandidate = await userModel.findOne({ name: userDTO.name });

        if (!nameCandidate) {
            throw new ApiError(422, "Current name or password is incorrect!")
        }

        if (!bcrypt.compareSync(userDTO.password, nameCandidate.password)) {
            throw new ApiError(422, "Current name or password is incorrect");
        }

        const token = jwt.sign({}, process.env.SECRET_USER_ACCESS_TOKEN, { expiresIn: "7200s" })

        return {
           user_id: nameCandidate.user_id, 
           token: token
        }
    }

    async addToWhishlist(userDTO, productDTO){
        const userCandidate = await userModel.findOne({user_id: userDTO.user_id})

        if(!userCandidate){
            throw new ApiError(422, "Invalid user id")
        }

        const productCandidate = await productModel.findOne({product_id: productDTO.product_id})

        if(!productCandidate){
            throw new ApiError(422, "Invalid product id")
        }

        await userModel.updateOne({ user_id: userDTO.user_id }, { $push: { whishList: productDTO.product_id } });

        return {
            product_id: productCandidate.product_id
        }
    }

    async removeFromWhishlist(userDTO, productDTO){
        const userCandidate = await userModel.findOne({user_id: userDTO.user_id})

        if(!userCandidate){
            throw new ApiError(422, "Invalid user id")
        }

        const productCandidate = await productModel.findOne({product_id: productDTO.product_id})

        if(!productCandidate){
            throw new ApiError(422, "Invalid product id")
        }

        await userModel.updateOne({ user_id: userDTO.user_id }, { $pullAll: { whishList: [productDTO.product_id] } });

        return {
            product_id: productCandidate.product_id
        }
    }

    async addToFavorites(userDTO, productDTO){
        const userCandidate = await userModel.findOne({user_id: userDTO.user_id})

        if(!userCandidate){
            throw new ApiError(422, "Invalid user id")
        }

        const productCandidate = await productModel.findOne({product_id: productDTO.product_id})

        if(!productCandidate){
            throw new ApiError(422, "Invalid product id")
        }

        await userModel.updateOne({ user_id: userDTO.user_id }, { $push: { favoritesList : productDTO.product_id } });

        return {
            product_id: productCandidate.product_id
        }
    }

    async removeFromFavorites(userDTO, productDTO){
        const userCandidate = await userModel.findOne({user_id: userDTO.user_id})

        if(!userCandidate){
            throw new ApiError(422, "Invalid user id")
        }

        const productCandidate = await productModel.findOne({product_id: productDTO.product_id})

        if(!productCandidate){
            throw new ApiError(422, "Invalid product id")
        }

        await userModel.updateOne({ user_id: userDTO.user_id }, { $pullAll: { favoritesList: [productDTO.product_id] } });

        return {
            product_id: productCandidate.product_id
        }
    }

    async findById(user_id) {
        const idCandidate = await userModel.findOne({ user_id: user_id });

        if (!idCandidate) {
            throw new ApiError(422, "Current name or password is incorrect!")
        }

        return {
            name: idCandidate.name,
            user_id: idCandidate.user_id,
            email: idCandidate.email,
            phone: idCandidate.phone,
            whishList: idCandidate.whishList,
            favoritesList: idCandidate.favoritesList
        }
    }

}


module.exports = new AuthService();