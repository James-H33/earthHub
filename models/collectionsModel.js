var mongoose = require('mongoose');

var collectionSchema = new mongoose.Schema({
  name: String,
  image: String
});

module.exports = mongoose.model('Collections', collectionSchema);
