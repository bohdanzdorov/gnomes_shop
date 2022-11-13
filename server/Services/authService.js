const bcrypt = require("bcryptjs");

const userModel = require("../Models/userModel");
const ApiError = require("../Middlewares/apiError");

class AuthService {

    async registration(userDTO) {

        const emailCandidate = await userModel.findOne({ email: userDTO.email });

        if (emailCandidate) {
            throw new ApiError(422, "Uniqueness error", {email : ["!Current email is already taken!"]})
        }

        userDTO.password = bcrypt.hashSync(userDTO.password, 10);

        const user = await userModel.create({ name: userDTO.name, user_id: Date.now(), password: userDTO.password, email: userDTO.email, whishList: [], favoritesList: []});

        return {
            name: userDTO.name,
            password: userDTO.password,
            email: userDTO.email
        }
    }

    async remove(userDTO) {
        const nameCandidate = await userModel.findOne({ name: userDTO.name });

        if(!nameCandidate){
            throw new ApiError(422,"Current name or password is incorrect")
        }
        
        if (!bcrypt.compareSync(userDTO.password, nameCandidate.password)) {
            throw new ApiError(422, "Current name or password is incorrect");
        }
        
        await userModel.deleteOne({ name: userDTO.name});

        return {
            name: userDTO.name,
            password: userDTO.password 
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

        await userModel.updateOne({ name: userDTO.name },{ password: newPassword });

        return {
            name: changeCandidate.name, 
            password: newPassword 
        }
    }

    async changeName(userDTO, newName) {

        const newNameCandidate = await userModel.findOne({name: newName})

        if(newNameCandidate){
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

    async find(userDTO) {
        const nameCandidate = await userModel.findOne({ name: userDTO.name });

        if (!nameCandidate) {
            throw new ApiError(422, "Current name or password is incorrect!")
        }

        if (!bcrypt.compareSync(userDTO.password, nameCandidate.password)) {
            throw new ApiError(422, "Current name or password is incorrect");
        }

        return {
            name: nameCandidate.name,
            password: nameCandidate.password, 
            user_id: nameCandidate.user_id,
            email: nameCandidate.email,
            whishList: nameCandidate.whishList,
            favoritesList: nameCandidate.favoritesList
        }
    }

}


module.exports = new AuthService();