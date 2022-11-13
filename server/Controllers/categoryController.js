const categoryService = require("../Services/categoryService");
const CategoryDTO = require("../DTOs/categoryDTO");

class AuthController{

    async create(req, res, next){
        try{
          const {name} = req.body;
          const payload = new CategoryDTO(name);

          const category = await categoryService.add(payload);

          return res.status(200).json({
            success: true,
            category: category
          });

        }catch(e){
            next(e);
        }

    }

    async remove(req, res, next){
        try{
          const {name} = req.body;
          const payload = new CategoryDTO(name);

          const category = await categoryService.remove(payload);

          return res.status(200).json({
            success: true,
            category: category
          });
          
        }catch(e){
            next(e);
        }

    }

    async updateName(req, res, next){
        try{
          const {name, newName} = req.body;
          const payload = new CategoryDTO(name);

          const category = await categoryService.updateName(payload, newName);
          
          return res.status(200).json({
            success: true,
            category: category
          });
          
        }catch(e){
            next(e);
        }

    }


    async find(req, res, next){
        try{
          const {name} = req.body;
          const payload = new CategoryDTO(name);

          const category = await categoryService.find(payload);
         
          return res.status(200).json({
            success: true,
            category: category
          });
          
        }catch(e){
            next(e);
        }

    }
}

module.exports = new AuthController();