const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MovieSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  story:{
    type:String,
    default: false
  },
  cast: {
    type: String,
    default: Date.now
  },
  releasedate: {
    type: Date,
    default: Date.now
  }
});

module.exports = Movies = mongoose.model("movies", MovieSchema);
