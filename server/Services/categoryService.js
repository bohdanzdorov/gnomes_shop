const categoryModel = require("../Models/categoryModel")
const ApiError = require("../Middlewares/apiError");

class CategoryService {

    async add(categoryDTO) {

        const nameCandidate = await categoryModel.findOne({ name: categoryDTO.name });

        if (nameCandidate) {
            throw new ApiError(422, "Uniqueness error", {name : ["!Category with such name already exists!"]})
        }

        const category = await categoryModel.create({ name: categoryDTO.name, category_id: Date.now()});

        return {
            name: categoryDTO.name,
            id: category.category_id
        }
    }

    async remove(categoryDTO) {
        const nameCandidate = await categoryModel.findOne({ name: categoryDTO.name });

        if (!nameCandidate) {
            throw new ApiError(422, "Finding error", {name : ["!Category with such name does not exist!"]})
        }

        await categoryModel.deleteOne({ name: categoryDTO.name});

        return {
            name: categoryDTO.name
        }
    }

    async updateName(categoryDTO, newName) {

        const changeCandidate = await categoryModel.findOne({ name: categoryDTO.name});

        if (!changeCandidate) {
            throw new ApiError(422, "Finding error", {name : ["!Category with such name does not exist!"]})
        }

        const possibleChangeCandidate = await categoryModel.findOne({ name: newName});

        if (possibleChangeCandidate) {
            throw new ApiError(422, "Uniqueness error", {name : ["!Category with such name already exists!"]})
        }

        await categoryModel.updateOne({ name: categoryDTO.name}, { name: newName});

        return {
            name: changeCandidate.name, 
            newName: newName 
        }
    }

    async find(categoryDTO) {
        const nameCandidate = await categoryModel.findOne({ name: categoryDTO.name});

        if (!nameCandidate) {
            throw new ApiError(422, "!Could not find category with such name!")
        }

        return {
            name: nameCandidate.name,
            category_id: nameCandidate.category_id
        }
    }

}


module.exports = new CategoryService();