const {Schema, model} = require("mongoose");

const UserSchema = new Schema({

   name: {type: String, require: true, unique: true},
   password: {type: String, require: true},
   user_id: {type: Number, require: true, unique: true},
   email: {type: String, require: true, unique: true},
   phone: {type: String, require: true},
   whishList : { type : Array , "default" : [] },
   favoritesList : { type : Array , "default" : [] }

});

module.exports = model("Users", UserSchema);