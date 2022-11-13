const Router = require("express").Router
const controller = require("../Controllers/productController")

const productRouter = new Router()

productRouter.post("/add", controller.add)
productRouter.delete("/remove", controller.remove)
productRouter.put("/changeById", controller.changeById)
productRouter.get("/findByName", controller.findByName)

module.exports = productRouter