var mongoose = require('mongoose');

var gallerySchema = new mongoose.Schema({
  name: String,
  image: String,
  gallery: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "galleryName"
    }
  ]
});

module.exports = mongoose.model('Gallery', gallerySchema);
