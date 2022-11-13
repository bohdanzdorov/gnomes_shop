const commentModel = require("../Models/commentModel")
const ApiError = require("../Middlewares/apiError");

class CommentService {

    async add(commentDTO) {

        const comment = await commentModel.create({ user_id: commentDTO.user_id, comment_id: Date.now(), product_id: commentDTO.product_id, text: commentDTO.text});

        return {
            user_id: comment.user_id, 
            comment_id: comment.comment_id,
            product_id: comment.product_id, 
            text: comment.text
        }
    }

    async removeById(commentDTO) {
        const idCandidate = await commentModel.findOne({ comment_id: commentDTO.comment_id });

        if (!idCandidate) {
            throw new ApiError(422, "Finding error", {name : ["!Comment with such id does not exist!"]})
        }

        await commentModel.deleteOne({ comment_id: commentDTO.comment_id});

        return {
            comment_id: idCandidate.comment_id,
            text: idCandidate.text
        }
    }

    async findById(commentDTO) {
        const idCandidate = await commentModel.findOne({ comment_id: commentDTO.comment_id});

        if (!idCandidate) {
            throw new ApiError(422, "!Could not find comment with such id!")
        }

        return {
            user_id: idCandidate.user_id, 
            comment_id: idCandidate.comment_id,
            product_id: idCandidate.product_id, 
            text: idCandidate.text
        }
    }

}


module.exports = new CommentService();