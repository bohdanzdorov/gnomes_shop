class UserDTO{
    name
    password
    user_id
    email
    phone
    whishList
    favoritesList
 
    constructor(name = "", password = "", user_id = -1, email = "", phone = "", whishList=[], favoritesList=[]){
       this.name = name
       this.password = password
       this.user_id = user_id
       this.email = email
       this.phone = phone
       this.whishList = whishList
       this.favoritesList = favoritesList
    }
};

module.exports = UserDTO;