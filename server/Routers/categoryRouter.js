const Router = require("express").Router;
const controller = require("../Controllers/categoryController");

const userValidationMiddleware = require("../Middlewares/userValidationMiddleware");

const categoryRouter = new Router();

categoryRouter.post("/create", userValidationMiddleware, controller.createCategory);
categoryRouter.delete("/remove", controller.removeCategory);
categoryRouter.put("/updateName", controller.updateName);
categoryRouter.get("/findByName", controller.findCategory);

module.exports = categoryRouter;