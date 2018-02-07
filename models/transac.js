// Importing mongoose.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creanig transcasion schema.
const transacSchema = new Schema({
    bookStart: {
        day: String,
        month: String,
        year: String,
    },
    bookEnd: {
        day: String,
        month: String,
        year: String,
    },
    guestCount: Number,
    hostId: String,
    guestId: String,
    flatId: String,
});

// Creating transaction collection.
const Transac = mongoose.model('transac', transacSchema);

// Exporting Transac collection to transac api.
module.exports = Transac;