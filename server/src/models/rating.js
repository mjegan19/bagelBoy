const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  feedback: {type: String, required: true},
  rating: {type: Number, required: true},
  store: {type: Schema.Types.ObjectId, ref: 'Store', required: true},
});

module.exports = mongoose.model('Rating', ratingSchema);