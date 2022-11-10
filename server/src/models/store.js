const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storeSchema = new Schema({
  storeName: {type: String, required: true},
  streetAddress: {type: String, required: true},
  city: {type: String, required: true},
  phone: {type: String},
  website: {type: String},
  signatureBagel: {type: String, required: true},
  description: {type: String, required: true},
  storePhoto: {type: String}
});

module.exports = mongoose.model('Store', storeSchema);