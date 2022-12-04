const Router = require("express").Router;
const controller = require("../Controllers/authController");

const authRouter = new Router();

authRouter.post("/registration", controller.registration);
authRouter.delete("/remove", controller.removeUser);
authRouter.put("/changePassword", controller.changePassword);
authRouter.put("/changeName", controller.changeName);
authRouter.post("/logIn", controller.logIn);
authRouter.post("/addToWhishList", controller.addToWhishlist);
authRouter.delete("/removeFromWhishlist", controller.removeFromWhishlist);
authRouter.post("/addToFavorites", controller.addToFavorites);
authRouter.delete("/removeFromFavorites", controller.removeFromFavorites)
authRouter.post("/find", controller.findUserById);

module.exports = authRouter;