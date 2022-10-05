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
        required: 'Please type a caption!',
        minlength: 1, 
        maxlength: 300,
        trim: true,
    },
    user: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date, 
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    comments: [
        {
          commentText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
          },
          commentUser: {
            type: String,
            required: true,
          },
          createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
          },
        },
      ],
});

const Post = model('Post', postSchema);

module.exports = Post;