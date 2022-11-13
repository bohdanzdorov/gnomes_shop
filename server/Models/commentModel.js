const {Schema, model} = require("mongoose");

const CommentSchema = new Schema({

    user_id: {type: Number, require: true, unique: true},
    comment_id: {type: Number, require: true, unique: true},
    product_id: {type: Number, require: true, unique: true},
    text: {type: String, require: true},
    
});

module.exports = model("Comments", CommentSchema);