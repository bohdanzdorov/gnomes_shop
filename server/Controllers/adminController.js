const adminService = require("../Services/adminService");
const AdminDTO = require("../DTOs/adminDTO");

class AuthController{

    async addAdmin(req, res, next){
        try{
          const {login, password} = req.body;
          const payload = new AdminDTO(login, password);

          const admin = await adminService.create(payload);

          return res.status(200).json({
            success: true,
            admin: admin
          });

        }catch(e){
            next(e);
        }
    }

    async removeAdmin(req, res, next){
        try{
          const {login, password} = req.body;
          const payload = new AdminDTO(login, password);

          const admin = await adminService.remove(payload);

          return res.status(200).json({
            success: true,
            admin: admin
          });
          
        }catch(e){
            next(e);
        }
    }

    async changeLogin(req, res, next){
        try{
          const {login, password, newLogin} = req.body;
          const payload = new AdminDTO(login, password);

          const admin = await adminService.changeLogin(payload, newLogin);
          
          return res.status(200).json({
            success: true,
            admin: admin
          });
          
        }catch(e){
            next(e);
        }
    }

    async findAdmin(req, res, next){
        try{
          const {login, password} = req.body;
          const payload = new AdminDTO(login, password);

          const admin = await adminService.find(payload);
         
          return res.status(200).json({
            success: true,
            admin: admin
          });
          
        }catch(e){
            next(e);
        }
    }
}

module.exports = new AuthController();