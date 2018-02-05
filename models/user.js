// Importing mongoose.
const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

// Creating the user schema.
const UserSchema = new Schema({
    name: String,
    likedFlatsIds: Array,
    bookedFlats: Array,
    joinedAt: Number,
    email: String, 
    password: String,
})

// Create user collection.
const User = mongoose.model('user', UserSchema);

// Export User collection to user api.
module.exports = User;