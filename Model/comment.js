const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    content: {
        type: String,
        require: true
    },
    tag: {
        type: Object,
        require: true
    },
    reply: {
        type: mongoose.Types.ObjectId,
        require: true
    },
    likes: {
        type: mongoose.Types.ObjectId,
        require: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        require: true
    },
    postId: {
        type: mongoose.Types.ObjectId,
        require: true
    },
    postUserId: {
        type: mongoose.Types.ObjectId,
        require: true
    }
});

const Comments = mongoose.model('Comments', CommentsSchema);
module.exports = Comments;