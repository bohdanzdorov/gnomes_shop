class UserDTO{
    name
    password
    user_id
    email
    whishList
    favoritesList
 
    constructor(name = "", password = "", user_id = -1, email = "", whishList=[], favoritesList=[]){
       this.name = name
       this.password = password
       this.user_id = user_id
       this.email = email
       this.whishList = whishList
       this.favoritesList = favoritesList
    }
};

module.exports = UserDTO;