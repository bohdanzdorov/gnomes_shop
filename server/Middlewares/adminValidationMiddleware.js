const jwt = require("jsonwebtoken")

const ApiError = require("./apiError");

module.exports = async(req, res, next)=>{
     try{
        const token = req.headers.token;

        try{
            jwt.verify(token, process.env.SECRET_ADMIN_ACCESS_TOKEN)
        }catch(e){
            throw new ApiError(401, "The token expired.")
        }

        next();

    }catch(e){
        return next(e);
    }
    
 }