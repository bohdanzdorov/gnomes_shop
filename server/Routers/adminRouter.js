const Router = require("express").Router;
const controller = require("../Controllers/adminController");

const adminRouter = new Router();

adminRouter.post("/create", controller.addAdmin);
adminRouter.delete("/remove", controller.removeAdmin);
adminRouter.put("/changeName", controller.changeLogin);
adminRouter.get("/find", controller.findAdmin);


module.exports = adminRouter;