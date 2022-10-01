const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    image: {
        name: String,
        desc: String,
        img:
        {
            data: Buffer,
            contentType: String
        }
    },
    caption: {
        type: String,
        required: false,
    },
});

const Post = model('Post', postSchema);

module.exports = Post;