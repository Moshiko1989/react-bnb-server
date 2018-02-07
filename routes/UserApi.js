const cl = console.log;
// Extntions.
const express = require('express');
const router = express.Router();

// Access to the User collection.
const User = require('../models/user');

// Adding new user to data base.
router.post('/user', function (req, res, next) {
    // In the future, check that email & name is not already in data base.
    // Something like:
    // User.find({name: req.body.name} || {emil: req.body.emaial}).then(do error)....

    User.create(req.body).then(function (user) {
        res.send(user);
    }).catch(next);
});

// Updating user. 
router.put('/user/:id', function (req, res, next) {
    let _id = req.params.id;
    let user = req.body;
    User.findByIdAndUpdate({ _id }, user).then(function() {
        User.findById(_id).then(function (user) {
            res.send(user);
        })
    })
})

// Load & Validate user from data base.
router.get('/user/:name/:password', function (req, res, next) {
    User.findOne({ name: req.params.name, password: req.params.password })
        .then(function (user) {
            if (!user); // Inform client somehow...
            res.send(user);
        }).catch(next);
})

// Export User router to index.
module.exports = router;