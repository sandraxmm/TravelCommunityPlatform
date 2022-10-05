const db = require('../config/connection');
const { SignUp, Login, Post, Comment } = require('../models');

const signupData = require('./signupData.json');
const loginData = require('./loginData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

db.once('open', async () => {
    await SignUp.deleteMany({}),
    Login.deleteMany({}),
    Post.deleteMany({}),
    Comment.deleteMany({});

    const signup = await SignUp.insertMany(signupData);
    const login = await Login.insertMany(loginData);
    const post = await Post.insertMany(postData);
    const comment = await Comment.insertMany(commentData);

    console.log('Data seeded!');
    process.exit(0);
});