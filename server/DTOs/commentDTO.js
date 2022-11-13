class CommentDTO{
    user_id
    comment_id
    product_id
    text

    constructor(user_id = -1, comment_id = -1, product_id = -1, text = ""){
       this.user_id = user_id
       this.comment_id = comment_id
       this.product_id = product_id
       this.text = text
    }
};

module.exports = CommentDTO;