// Importing mongoose.
const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

// Creating the flat schema.
const FlatSchema = new Schema({
    imgUrl: String,
    title: String,
    address: String,
    desc: String,
    prices: Object,
    country : String, 
    bookings : Array,
    user: String,
    userLikedIds: Array,
});

// Creating Flat collection.
const Flat = mongoose.model('flat', FlatSchema);

// Export Flat collection to flat api.
module.exports = Flat;