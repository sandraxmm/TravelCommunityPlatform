const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Comment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('posts');
        },
        // post created by user for profile page
        posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Post.find(params).sort({ createdAt: -1 });
        },
        // pulling post with specific location
        posts: async (parent, { _location }) => {
            const params = _location ? { _location } : {};
            return Post.find(params).populate(['comments', 'likes']);
        },
        // pulling profile for spefic user after login
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('comments');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutations: {
        // adding a new user
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        // user login
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('No user found with this username');
            }

            const correctPassword = await user.isCorrectPassword(password);

            if(!correctPassword) {
                throw new AuthenticationError('Invalid credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        // create new post
        createPost: async (parent, { postText, postLocation, postImage}, context) => {
            if (context.user) {
                const post = await Post.create({
                    postText,
                    postLocation,
                    postImage,
                    postAuthor: context.user.username,
                });
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { post: post._id} }
                );
                return post;
            }
        },
        // create new comment
        createComment: async (parent, { postId, commentText }, context) => {
            if (context.user) {
                return Post.findOneAndUpdate(
                    { _id: postId},
                    { 
                        $addToSet {
                            comments: { commentText, commentAuthor: context.user.username },
                        },
                    },
                );
            }
        },
        // delete post
        removePost: async (parent, { postId }, context) => {
            if (context.user) {
                const post = await Post.findOneAndDelete({
                    _id: postId,
                    postAuthor: context.user.username,
                });
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { posts: thought._id } }
                );
                return thought;
            }
        },
    },
};

module.exports = resolvers;