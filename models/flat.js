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
    userLikedIds: Array,
    transacs : Array,
    user: String,
});

// Creating Flat collection.
const Flat = mongoose.model('flat', FlatSchema);

// Export Flat collection to flat api.
module.exports = Flat;