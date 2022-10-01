const { Schema, model } = require('mongoose');

const signupSchema = new Schema({
    email: {
        type: String,
        validate: isEmail,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const SignUp = model('SignUp', signupSchema);

module.exports = SignUp;