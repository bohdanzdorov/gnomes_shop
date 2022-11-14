const Router = require("express").Router
const controller = require("../Controllers/productController")

const adminValidationMiddleware = require("../Middlewares/adminValidationMiddleware")

const productRouter = new Router()

productRouter.post("/add", adminValidationMiddleware, controller.addProduct)
productRouter.delete("/remove", adminValidationMiddleware, controller.removeProduct)
productRouter.put("/changeById", adminValidationMiddleware, controller.changeProductById)
productRouter.get("/findByName", adminValidationMiddleware, controller.findProduct)

module.exports = productRouter