const Router = require("express").Router;
const controller = require("../Controllers/commentController");

const commentRouter = new Router();

commentRouter.post("/add", controller.addComment);
commentRouter.delete("/remove", controller.removeCommentById);
commentRouter.get("/findById", controller.findCommentById);

module.exports = commentRouter;