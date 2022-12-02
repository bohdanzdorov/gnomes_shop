const photoService = require("../Services/photoService")

class PhotoController{

    async getProductPhoto(req, res, next){
        try{
            const photo = req.params.photo

            const resPhoto = await photoService.getProductPhoto(photo)
            res.sendFile(resPhoto);           

        }catch(e){
            next(e);
        }
    }
}

module.exports = new PhotoController();