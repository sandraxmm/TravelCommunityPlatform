const db = require('../config/connection');
const { SignUp, Post } = require('../models');

const signupData = require('./signupData.json');
const postData = require('./postData.json');

db.once('open', async () => {
    await SignUp.deleteMany({}),
    Post.deleteMany({});

    const signup = await SignUp.insertMany(signupData);
    const post = await Post.insertMany(postData);

    console.log('Data seeded!');
    process.exit(0);
});