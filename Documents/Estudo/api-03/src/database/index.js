const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest1',{ useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;