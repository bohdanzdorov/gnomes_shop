const ProductDTO = require("../DTOs/productDTO")
const productService = require("../Services/productService")


class ProductController{
   

    async add(req, res, next){
        try{
            const{name, category_id, price, sale, producer, description, sold_count} = req.body

            const payload = new ProductDTO(name, -1, category_id,  price, sale, producer, description, sold_count)

            const product = await productService.add(payload)

            return res.status(200).json({
                success: true,
                product: product
            })

       }catch(e){
        next(e)
       }
    }

    async remove(req, res, next){
        try{
            const{name} = req.body

            const payload = new ProductDTO(name)

            const product = await productService.remove(payload)

            return res.status(200).json({
                success: true,
                product: product
            })

       }catch(e){
        next(e)
       }
    }

    async changeById(req, res, next){
        try{
          const {name, product_id, category_id, price, sale, producer, description, sold_count} = req.body;
          const payload = new ProductDTO(name, product_id, category_id, price, sale, producer, description, sold_count);

          const product = await productService.changeById(payload);
          
          return res.status(200).json({
            success: true,
            product: product
          });
          
        }catch(e){
            next(e);
        }

    }

    async findByName(req, res, next){
        try{
            const{name} = req.body
            const payload = new ProductDTO(name)

            const product = await productService.find(payload)

            return res.status(200).json({
                success: true,
                product: product
            })

        }catch(e){
            next(e)
        }
    }


}

module.exports = new ProductController()