const Router = require("express").Router;
const controller = require("../Controllers/authController");

const authRouter = new Router();

authRouter.post("/registration", controller.registration);
authRouter.delete("/remove", controller.remove);
authRouter.put("/changePassword", controller.changePassword);
authRouter.put("/changeName", controller.changeName);
authRouter.get("/find", controller.find);


module.exports = authRouter;