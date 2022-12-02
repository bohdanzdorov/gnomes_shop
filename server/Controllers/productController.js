const ProductDTO = require("../DTOs/productDTO")
const productRouter = require("../Routers/productRouter")
const productService = require("../Services/productService")


class ProductController{
   

    async addProduct(req, res, next){
        try{

            let photo = req.file.filename

            const photolink = `http://localhost:4000/photo/products/${photo}`

            photo = photolink

            const{name, category_id, price, sale, producer, description, sold_count} = req.body

            const payload = new ProductDTO(name, -1, category_id,  price, sale, producer, description, sold_count, photo)

            const product = await productService.add(payload)

            return res.status(200).json({
                success: true,
                product: product
            })

       }catch(e){
        next(e)
       }
    }

    async removeProduct(req, res, next){
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

    async changeProductById(req, res, next){
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

    async getProductsPage(req, res, next) {
        try {
            let count = req.query.count
            let page = req.query.page

            if (!count)
                count = 4

            const resultProductsList = await productService.getProductsPage(page, count);

            return res.status(200).json({
                success: true,
                products: resultProductsList
            })

        } catch (e) {
            next(e)
        }
    }

    async findProduct(req, res, next){
        try{
            const{name, product_id} = req.body
            const payload = new ProductDTO(name, product_id)

            console.log(payload.name)

            let product
            if(!payload.name){
                 product =  await productService.findById(payload)
            }else{
                 product = await productService.findByName(payload)
            }
            
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