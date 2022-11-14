const Router = require("express").Router;
const controller = require("../Controllers/authController");

const authRouter = new Router();

authRouter.post("/registration", controller.registration);
authRouter.delete("/remove", controller.removeUser);
authRouter.put("/changePassword", controller.changePassword);
authRouter.put("/changeName", controller.changeName);
authRouter.get("/logIn", controller.logIn);
authRouter.get("/find", controller.findUser);


module.exports = authRouter;