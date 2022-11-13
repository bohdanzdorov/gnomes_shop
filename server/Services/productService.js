const productModel = require("../Models/productModel")
const ApiError = require("../Middlewares/apiError")


class ProductService{

    async add(productDTO){
        const nameCandidate = await productModel.findOne({ name: productDTO.name });

        if (nameCandidate) {
            throw new ApiError(422, "Uniqueness error", {name : ["!Product with such name already exists!"]})
        }

        productDTO.product_id = Date.now()
        
        const product = await productModel.create(productDTO);

        return {
            product
        }
    }

    async remove(productDTO){
        const nameCandidate = await productModel.findOne({ name: productDTO.name });

        if (!nameCandidate) {
            throw new ApiError(422, "Finding error", {name: ["Cannot find product with such name"]});
        }

        await productModel.deleteOne({ name: productDTO.name });

        return {
            name: nameCandidate.name,
            category_id: nameCandidate.category_id,
            description: nameCandidate.description 
        }
    }

    async changeById(productDTO){
        const idCandidate = await productModel.findOne({ product_id: productDTO.product_id });

        if (!idCandidate) {
            throw new ApiError(422, "Finding error", {id: ["Cannot find product with such id"]});
        }

        for (const key in productDTO) {
            if (Object.hasOwnProperty.call(productDTO, key)) {
                const element = productDTO[key];
                if(element == -1 || element == ""){
                    productDTO[key] = idCandidate[key]
                }
            }
        }

        await productModel.updateOne({ product_id: productDTO.product_id},
            productDTO);

        return {
            name: productDTO.name,
            category_id: productDTO.category_id,
            description: productDTO.description 
        }
    }

    async findByName(productDTO){
        const nameCandidate = await productModel.findOne({ name: productDTO.name});
        console.log("id x2")
        if (!nameCandidate) {
            throw new ApiError(422, "!Product with such name does not exist!")
        }
       
        return nameCandidate
    }


    async findById(productDTO){
        const idCandidate = await productModel.findOne({ product_id: productDTO.product_id});
       
        if (!idCandidate) {
            throw new ApiError(422, "!Product with such id does not exist!")
        }

        return idCandidate
    }


}

module.exports = new ProductService()