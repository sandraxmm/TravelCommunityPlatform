const { Schema, model } = require('mongoose');

const loginSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const Login = model('Login', loginSchema);

module.exports = Login;