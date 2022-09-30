const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    image: {
        type: Image,
        required: true,
    },
    caption: {
        type: String,
        required: false,
    },
});

const Post = model('Post', postSchema);

module.exports = Post;