const Router = require("express")

const photoController = require("../Controllers/photoController")

const photoRouter = new Router()

photoRouter.get("/products/:photo", photoController.getProductPhoto)
 
module.exports = photoRouter