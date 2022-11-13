const Router = require("express").Router
const controller = require("../Controllers/productController")

const productRouter = new Router()

productRouter.post("/add", controller.addProduct)
productRouter.delete("/remove", controller.removeProduct)
productRouter.put("/changeById", controller.changeProductById)
productRouter.get("/findByName", controller.findProduct)

module.exports = productRouter