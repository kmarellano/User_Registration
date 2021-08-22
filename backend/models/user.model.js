const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    phone: Number,
    birthday: Date,
});

const User = mongoose.model('users', userSchema);
module.exports = User;