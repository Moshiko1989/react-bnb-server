const cl = console.log;

// Importing Express.
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// Set up Express app.
app = express();
// Conect to mongo db.
const options = {
    useMongoClient: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  };
mongoose.connect('mongodb://moshiko:9301306moshiko@ds125288.mlab.com:25288/react-bnb', options);
mongoose.Promise = global.Promise;

/////////////////////// Middlewares ///////////////////////////////

// Not sure what it does yet, related to serving front end files.
// app.use(express.static('public'));

// Using Cors to overcome cors in dev mode.
app.use(cors());

// Using Body Parser.
app.use(bodyParser.json());

// Routes :
app.use(require('./routes/FlatsApi'));
app.use(require('./routes/UserApi'));
app.use(require('./routes/TransacApi'));

// Error handling middleware.
app.use(function (err, req, res, next) {
    res.status(422).send({ error: err.message })
});

//////////////////////// Listen /////////////////////////////////

// Listen to requests.
app.listen(process.env.port || 4000, function () {
    cl('******************************');
    cl('**  listening to port 4000  **');
    cl('******************************');
})