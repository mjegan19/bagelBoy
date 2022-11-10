const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  feedback: {type: String, required: true},
  rating: {type: Number, required: true},
});

module.exports = mongoose.model('Rating', ratingSchema);