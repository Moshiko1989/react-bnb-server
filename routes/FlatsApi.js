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
    let likes = JSON.parse(req.params.userLikes)
    Flat.find({ _id: { $in: likes } }).then(function (flats) {
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
        res.send(flats)
    }).catch(cl('No flats available'))
});

//Crud.
// Add one Flat.
router.post('/flats', function (req, res, next) {
    // cl('post "/flats" happened');
    Flat.create(req.body).then(function (flat) {
        // cl('flat: ', flat);
        res.send(flat);
    }).catch(next);
});

//crUd.
// Update flat.
router.put('/flats/likes/:flatId/:userId', function (req, res, next) {
    let flatId = req.params.flatId;
    let userId = req.params.userId;
    Flat.findById({ _id: flatId }, { $push: { userLikedIds: userId } }).then(function () {
        Flat.findOne({ _id: flatId }).then(function (flat) {
            res.send(flat)
        })
    })
    // res.send({ type: 'PUT' });
});

// Update flat.
// router.put('/flats/books/:flatId/:userId', function(req, res, next) {
//     let flatId = req.params.flatId; 
//     let userId = req.params.userId;
//     Flat.findById({ _id: flatId}, {$push: {bookedFlats: userId}}).then(function() {
//         Flat.findOne({ _id: flatId}).then(function(flat) {
//             res.send(flat);
//         })
//     }) 
// })

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