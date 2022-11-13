const Router = require("express").Router;
const controller = require("../Controllers/adminController");

const adminRouter = new Router();

adminRouter.post("/create", controller.create);
adminRouter.delete("/remove", controller.remove);
adminRouter.put("/changeName", controller.changeLogin);
adminRouter.get("/find", controller.find);


module.exports = adminRouter;