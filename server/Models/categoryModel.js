const {Schema, model} = require("mongoose");

const CategorySchema = new Schema({

   name: {type: String, require: true, unique: true},
   category_id: {type: Number, require: true, unique: true},

});

module.exports = model("Categories", CategorySchema);