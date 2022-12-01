const Router = require("express").Router;
const controller = require("../Controllers/categoryController");

const adminValidationMiddleware = require("../Middlewares/adminValidationMiddleware");

const categoryRouter = new Router();

categoryRouter.post("/create", adminValidationMiddleware, controller.createCategory);
categoryRouter.delete("/remove", adminValidationMiddleware, controller.removeCategory);
categoryRouter.put("/updateName", adminValidationMiddleware, controller.updateName);
categoryRouter.get("/getCategories", controller.getCategories);
categoryRouter.get("/findByName", adminValidationMiddleware, controller.findCategory);

module.exports = categoryRouter;