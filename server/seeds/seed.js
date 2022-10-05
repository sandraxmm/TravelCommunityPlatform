const db = require('../config/connection');
const { User, Post } = require('../models');

const userSeeds = require('./userData.json');
const postSeeds = require('./postData.json');

db.once('open', async () => {
    try {
        await User.deleteMany({}),
        await Post.deleteMany({});

        await User.create(userSeeds);

        for (let i = 0; i < postSeeds.length; i++) {
            const { _id, postAuthor } = await Post.create(postSeeds[i]);
            const user = await User.findOneAndUpdate (
                { username: postAuthor },
                {
                    $addToSet: {
                        posts: _id,
                    },
                }
            );
            }
        } catch (err) {
            console.error(err);
            process.exit(1);
        }
        console.log('Data seeded!');
        process.exit(0);
    });