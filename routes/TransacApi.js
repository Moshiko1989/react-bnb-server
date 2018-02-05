const cl = console.log;
// Extentions.
const express = require('express');
const router = express.Router();

// Access to the Flat collection.
const Transac = require('../models/transac');

///////////////////////////////////////////////// Transac CRUD ///////////////////////////////////

router.post('/transaction/' , function(req, res, next) {
    Transac.create(req.body).then(function(transac) {
        res.send(transac);
    }).catch(next);
});

/////////////////////////////////////////////// End of Flat Crud ////////////////////////

// Export Transac router to index.
module.exports = router;