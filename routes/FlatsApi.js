const cl = console.log;
// Extentions.
const express = require('express');
const router = express.Router();

// Access to the Flat collection.
const Flat = require('../models/flat');

///////////////////////////////////////////////// Flat CRUD ///////////////////////////////////

//cRud.
// Give liked flats to client.
router.get('/flats/ids/:flatsIds', function (req, res, next) {
    let ids = JSON.parse(req.params.flatsIds);
    Flat.find({ _id: { $in: ids } }).then(function (flats) {
        res.send(flats);
    });
});

// Give one flat to client.
router.get('/flats/:id', function (req, res, next) {
    let id = req.params.id;
    Flat.findById(id).then(function (flat) {
        res.send(flat);
    });
});

// Give flats to client.
router.get('/flats', function (req, res, next) {
    Flat.find().then(function (flats) {
        res.send(flats)
    }).catch(cl('No flats available'));
});

// Updating flat. 
router.put('/flats/:id', function (req, res, next) {
    let _id = req.params.id;
    let flat = req.body;
    Flat.findByIdAndUpdate({ _id }, flat).then(function() {
        Flat.findById(_id).then(function (flat) {
            res.send(flat);
            console.log('flat: ', flat);
        })
    })
})

//////////////////////////////////////////////////// End of Flat Crud ////////////////////////

// Export Flat router to index.
module.exports = router;