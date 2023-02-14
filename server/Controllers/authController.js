const authService = require("../Services/authService");
const UserDTO = require("../DTOs/userDTO");
const ProductDTO = require("../DTOs/productDTO");

class AuthController{

    async registration(req, res, next){
        try{
          const {name, password, email, phone} = req.body;
          const payload = new UserDTO(name, password, -1, email, phone);

          const user = await authService.registration(payload);

          return res.status(200).json({
            success: true,
            user: user
          });

        }catch(e){
            next(e);
        }
    }

    async removeUser(req, res, next){
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

    async updateUserById(req, res, next){
      try{
        const {user_id, name, password, email, phone} = req.body
        const payload = new UserDTO(name, password, user_id, email, phone)

        const user = await authService.updateUserById(payload);

        return res.status(200).json({
          success: true,
          user: user
        });

      }catch(e){
        next(e)
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

    async logIn(req, res, next){
      try{
        const {name, password} = req.body;
        const payload = new UserDTO(name, password);

        const user = await authService.logIn(payload);
       
        return res.status(200).json({
          success: true,
          user: user
        });

      }catch(e){
        next(e)
      }
    }

    async addToWhishlist(req, res, next){
      try{
        const {user_id, product_id} = req.body
        const userPayload = new UserDTO("", "", user_id)
        const productPayload = new ProductDTO("", product_id)

        const user = await authService.addToWhishlist(userPayload, productPayload);

        return res.status(200).json({
          success: true,
          user: user
        })
      }catch(e){
        next(e)
      }
    }

    async removeFromWhishlist(req, res, next){
      try{
        const {user_id, product_id} = req.body
        const userPayload = new UserDTO("", "", user_id)
        const productPayload = new ProductDTO("", product_id)

        const user = await authService.removeFromWhishlist(userPayload, productPayload);

        return res.status(200).json({
          success: true,
          user: user
        })
      }catch(e){
        next(e)
      }
    }

    async getWishList(req, res, next){
      try{

        let user_id = req.query.user_id

        const whishList = await authService.getWishList(user_id);

        return res.status(200).json({
          success: true,
          whishList: whishList
        })
      }catch(e){
        next(e)
      }
    }

    async getInCart(req, res, next){
      try{

        let user_id = req.query.user_id

        const inCart = await authService.getInCart(user_id);

        return res.status(200).json({
          success: true,
          inCart: inCart
        })
      }catch(e){
        next(e)
      }
    }

    async addToFavorites(req, res, next){
      try{
        const {user_id, product_id} = req.body
        const userPayload = new UserDTO("", "", user_id)
        const productPayload = new ProductDTO("", product_id)

        const user = await authService.addToFavorites(userPayload, productPayload);

        return res.status(200).json({
          success: true,
          user: user
        })
      }catch(e){
        next(e)
      }
    }

    async removeFromFavorites(req, res, next){
      try{
        const {user_id, product_id} = req.body
        const userPayload = new UserDTO("", "", user_id)
        const productPayload = new ProductDTO("", product_id)

        const user = await authService.removeFromFavorites(userPayload, productPayload);

        return res.status(200).json({
          success: true,
          user: user
        })
      }catch(e){
        next(e)
      }
    }

    async findUserById(req, res, next){
        try{
          const {user_id} = req.body;

          const user = await authService.findById(user_id);
         
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