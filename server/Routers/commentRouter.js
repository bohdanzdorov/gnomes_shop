const Router = require("express").Router;
const controller = require("../Controllers/commentController");

const commentRouter = new Router();

commentRouter.post("/add", controller.create);
commentRouter.delete("/remove", controller.removeById);
commentRouter.get("/findById", controller.findById);

module.exports = commentRouter;