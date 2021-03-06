// Required dependencies and files
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema for User
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
});

// Creates our model from the above schema using mongoose model method
const User = mongoose.model('User', UserSchema);

// Export the UserSchema
module.exports = User;
