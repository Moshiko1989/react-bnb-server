const cl = console.log;
// Extentions.
const express = require('express');
const router = express.Router();

// Access to the Flat collection.
const Flat = require('../models/flat');

///////////////////////////////////////////////// Flat CRUD ///////////////////////////////////

//cRud.
// Give liked flats to client.
router.get('/flats/liked/:userLikes', function (req, res, next) {
    // cl('hi')
    // let likes = [
    // // Central Downtown Apartment with Amenities
    // '5a73449d86054a44af3bfa3e',
    // // Log House In Front of the Lake
    // '5a7384256620d874938ae17c',
    // // Romantic House by the Lake
    // '5a7385a120d129766e1dc5e3'
    // ];
    let likes = JSON.parse(req.params.userLikes)
    Flat.find({ _id: { $in: likes }}).then(function (flats) {
        res.send(flats);
    }); 
});

// Give one flat to client.
router.get('/flats/:id', function (req, res, next) {
    let id = req.params.id;
    Flat.findById(id).then(function (flat) {
        res.send(flat)
    });
});



// Give flats to client.
router.get('/flats', function (req, res, next) {
    cl('get "/flats" happened with: ', Flat);
    Flat.find().then(function (flats) {
        // cl('******')
        // cl(flats)
        // cl('******')
        res.send(flats)
    }).catch(cl('Kus omo'))
});

//Crud.
// Add one Flat.
router.post('/flats', function (req, res, next) {
    // cl('post "/flats" happend');
    Flat.create(req.body).then(function (flat) {
        // cl('flat: ', flat);
        res.send(flat);
    }).catch(next);
});

//crUd.
// Update one Flat.
router.put('/flats/:id', function (req, res, next) {
    // cl('put "/flats/:id" happend');
    // req.body should contain the change, change also should be valid by the schema.
    Flat.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Flat.findOne({ _id: req.params.id }).then(function (flat) {
            res.send(flat)
        })
    })
    // res.send({ type: 'PUT' });
});

//cruD.
// Delete one Flat.
router.delete('/flats/:id', function (req, res, next) {
    // cl('req.params.id:', req.params.id);
    Flat.findByIdAndRemove({ _id: req.params.id }).then(function (flat) {
        res.send({ flat, deleted: true });
    })
    // res.send({ type: 'DELETE' });
});

//////////////////////////////////////////////////// End of Flat Crud ////////////////////////

// Export Flat router to index.
module.exports = router;