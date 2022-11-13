const Router = require("express").Router;
const controller = require("../Controllers/categoryController");

const categoryRouter = new Router();

categoryRouter.post("/create", controller.create);
categoryRouter.delete("/remove", controller.remove);
categoryRouter.put("/updateName", controller.updateName);
categoryRouter.get("/findByName", controller.find);

module.exports = categoryRouter;