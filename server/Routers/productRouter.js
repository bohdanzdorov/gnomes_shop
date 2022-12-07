const Router = require("express").Router
const upload = require("../config/multerConfig")
const controller = require("../Controllers/productController")

const adminValidationMiddleware = require("../Middlewares/adminValidationMiddleware")

const productRouter = new Router()

productRouter.post("/add", upload, adminValidationMiddleware, controller.addProduct)
productRouter.delete("/remove", adminValidationMiddleware, controller.removeProduct)
productRouter.put("/changeById", adminValidationMiddleware, controller.changeProductById)
productRouter.get("/getProductsPage", controller.getProductsPage)
productRouter.get("/getProduct", controller.findProduct)

module.exports = productRouter