const Router = require("express").Router;
const controller = require("../Controllers/commentController");

const userValidationMiddleware = require("../Middlewares/userValidationMiddleware")

const commentRouter = new Router();

commentRouter.post("/add", userValidationMiddleware, controller.addComment);
commentRouter.delete("/remove", userValidationMiddleware, controller.removeCommentById);
commentRouter.get("/findById", userValidationMiddleware, controller.findCommentById);

module.exports = commentRouter;