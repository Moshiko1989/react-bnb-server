// Importing mongoose.
const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

// Creating the user schema.
const UserSchema = new Schema({
    name: String,
    email: String, 
    password: String,
    joinedAt: Number,
    likedFlatsIds: Array,
    bookedFlatsIds: Array,
    bookings: Array,
})

// Create user collection.
const User = mongoose.model('user', UserSchema);

// Export User collection to user api.
module.exports = User;