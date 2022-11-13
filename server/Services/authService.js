const userModel = require("../Models/userModel");
const ApiError = require("../Middlewares/apiError");

class AuthService {

    async registration(userDTO) {

        const emailCandidate = await userModel.findOne({ email: userDTO.email });

        if (emailCandidate) {
            throw new ApiError(422, "Uniqueness error", {email : ["!Current email is already taken!"]})
        }

        const user = await userModel.create({ name: userDTO.name, user_id: Date.now(), password: userDTO.password, email: userDTO.email, whishList: [], favoritesList: []});

        return {
            name: userDTO.name,
            password: userDTO.password,
            email: userDTO.email
        }
    }

    async remove(userDTO) {
        const nameCandidate = await userModel.findOne({ name: userDTO.name });
        const passwordCandidate = await userModel.findOne({ password: userDTO.password });

        if (!nameCandidate || !passwordCandidate) {
            throw new Error("Current name or password is incorrect");
        }

        await userModel.deleteOne({ name: userDTO.name, password: userDTO.password });

        return {
            name: userDTO.name,
            password: userDTO.password 
        }
    }

    async changePassword(userDTO, newPassword) {

        const changeCandidate = await userModel.findOne({ name: userDTO.name, password: userDTO.password });

        if (!changeCandidate) {
            throw new Error("Current name or password is incorrect");
        }

        await userModel.updateOne({ name: userDTO.name, password: userDTO.password },
            { name: userDTO.name, password: newPassword });

        return {
            name: changeCandidate.name, 
            password: newPassword 
        }
    }

    async changeName(userDTO, newName) {
        console.log(userDTO)

        const changeCandidate = await userModel.findOne({ name: userDTO.name, password: userDTO.password });

        if (!changeCandidate) {
            throw new Error("Current name or password is incorrect");
        }

        await userModel.updateOne({ name: userDTO.name, password: userDTO.password },
            { name: newName, password: userDTO.password });


        return {
            name: newName, 
           password: userDTO.password 
        }

    }

    async find(userDTO) {
        const nameCandidate = await userModel.findOne({ name: userDTO.name, password: userDTO.password });

        if (!nameCandidate) {
            throw new ApiError(422, "Current name or password is incorrect!")
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