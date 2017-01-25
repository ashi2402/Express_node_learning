var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://10.7.0.3:27107/data/learning');
mongoose.connect('mongodb://localhost/learning');

module.exports = mongoose;

