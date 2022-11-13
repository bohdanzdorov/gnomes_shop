const authService = require("../Services/authService");
const UserDTO = require("../DTOs/userDTO");

class AuthController{

    async registration(req, res, next){
        try{
          const {name, password, email} = req.body;
          const payload = new UserDTO(name, password, -1, email);

          const user = await authService.registration(payload);

          return res.status(200).json({
            success: true,
            user: user
          });

        }catch(e){
            next(e);
        }
    }

    async remove(req, res, next){
        try{
          const {name, password} = req.body;
          const payload = new UserDTO(name, password);

          const user = await authService.remove(payload);

          return res.status(200).json({
            success: true,
            user: user
          });
          
        }catch(e){
            next(e);
        }
    }

    async changePassword(req, res, next){
        try{
          const {name, password, newPassword} = req.body;
          const payload = new UserDTO(name, password);

          const user = await authService.changePassword(payload, newPassword);
          
          return res.status(200).json({
            success: true,
            user: user
          });
          
        }catch(e){
            console.log(e)
            next(e);
        }
    }

    async changeName(req, res, next){
        try{
          const {name, password, newName} = req.body;
          const payload = new UserDTO(name, password);

          const user = await authService.changeName(payload, newName);
          
          return res.status(200).json({
            success: true,
            user: user
          });
          
        }catch(e){
            next(e);
        }
    }

    async find(req, res, next){
        try{
          const {name, password} = req.body;
          const payload = new UserDTO(name, password);

          const user = await authService.find(payload);
         
          return res.status(200).json({
            success: true,
            user: user
          });
          
        }catch(e){
            next(e);
        }
    }
}

module.exports = new AuthController();