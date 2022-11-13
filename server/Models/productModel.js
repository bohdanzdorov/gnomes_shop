const {Schema, model} = require("mongoose");

const ProductSchema = new Schema({

   name: {type: String, require: true, unique: true},
   product_id: {type: Number, require: true, unique: true},
   category_id: {type: Number, require: true},
   price: {type: Number, require: true},
   sale: {type: Number, require: true},
   producer: {type: String, require: true},
   description: {type: String, require: true},
   sold_count: {type: Number, require: true},
   photo: {type: String, require: true}

});

module.exports = model("Products", ProductSchema);