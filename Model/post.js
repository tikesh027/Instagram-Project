const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    content: {
        type: String,
        require: true
    },
    image: {
        type: Array,
        require: true
    },
    like: {
        type: ObjectId,
        require: true
    },
    comments: {
        type: ObjectId,
        require: true
    },
    user: {
        type: ObjectId,
        require: true
    }
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;