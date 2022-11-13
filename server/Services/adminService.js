const bcrypt = require("bcryptjs");

const adminModel = require("../Models/adminModel");
const ApiError = require("../Middlewares/apiError");

class AdminService {

    async create(adminDTO) {

        const loginCandidate = await adminModel.findOne({ login: adminDTO.login });

        if (loginCandidate) {
            throw new ApiError(422, "Uniqueness error", {login : ["!Admin with such login already exist!"]})
        }

        adminDTO.password = bcrypt.hashSync(adminDTO.password, 12);

        const admin = await adminModel.create({ login: adminDTO.login, password: adminDTO.password });

        return {
            login: admin.login,
            password: admin.password,
        }
    }

    async remove(adminDTO) {
        const nameCandidate = await adminModel.findOne({ login: adminDTO.login });

        if(!nameCandidate){
            throw new ApiError(422,"Current name or password is incorrect")
        }
        
        if (!bcrypt.compareSync(adminDTO.password, nameCandidate.password)) {
            throw new ApiError(422, "Current name or password is incorrect");
        }
        
        await adminModel.deleteOne({ name: adminDTO.name});

        return {
            login: nameCandidate.login,
            password: nameCandidate.password 
        }
    }

    async changeLogin(adminDTO, newLogin) {

        const newLoginCandidate = await adminModel.findOne({login: newLogin})

        if(newLoginCandidate){
            throw new ApiError(422, "Sorry, this login is already taken")
        }

        const changeCandidate = await adminModel.findOne({ login: adminDTO.login });

        if (!changeCandidate) {
            throw new ApiError(422, "Current name or password is incorrect");
        }

        if (!bcrypt.compareSync(adminDTO.password, changeCandidate.password)) {
            throw new ApiError(422, "Current name or password is incorrect");
        }

        await adminModel.updateOne({ login: adminDTO.login },
            { login: newLogin });


        return {
            login: newLogin, 
            password: adminDTO.password 
        }

    }

    async find(adminDTO) {
        const nameCandidate = await adminModel.findOne({ login: adminDTO.login });

        if (!nameCandidate) {
            throw new ApiError(422, "Current name or password is incorrect!")
        }

        if (!bcrypt.compareSync(adminDTO.password, nameCandidate.password)) {
            throw new ApiError(422, "Current name or password is incorrect");
        }

        return {
            login: nameCandidate.login,
            password: nameCandidate.password, 
        }
    }

}


module.exports = new AdminService();