const commentService = require("../Services/commentService");
const CommentDTO = require("../DTOs/commentDTO");

class CommentController{

    async addComment(req, res, next){
        try{
          const {user_id, product_id, text} = req.body;
          const payload = new CommentDTO(user_id, -1, product_id, text);

          const comment = await commentService.add(payload);

          return res.status(200).json({
            success: true,
            comment: comment
          });

        }catch(e){
            next(e);
        }

    }

    async removeCommentById(req, res, next){
        try{
          const {comment_id} = req.body;
          const payload = new CommentDTO(-1, comment_id);

          const comment = await commentService.removeById(payload);

          return res.status(200).json({
            success: true,
            comment: comment
          });
          
        }catch(e){
           console.log(e) 
            next(e);
        }

    }

    async findCommentById(req, res, next){
        try{
          const {comment_id} = req.body;
          const payload = new CommentDTO(-1, comment_id);

          const comment = await commentService.findById(payload);
         
          return res.status(200).json({
            success: true,
            comment: comment
          });
          
        }catch(e){
            next(e);
        }

    }
}

module.exports = new CommentController();