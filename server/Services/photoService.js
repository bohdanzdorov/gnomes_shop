const path = require("path");

class PhotoService{

  async getProductPhoto(photo){
    console.log(photo)

    const result = await path.resolve(`./images/products/${photo}`)

    return result
  }
  
}

module.exports = new PhotoService();