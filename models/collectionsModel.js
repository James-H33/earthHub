var mongoose = require('mongoose');

var collectionSchema = new mongoose.Schema({
  name: String,
  image: String,
  collection: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "collectionName"
    }
  ]
});

module.exports = mongoose.model('Collections', collectionSchema);
