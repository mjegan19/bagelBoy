const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// const { hashPassword } = require('../utilities/authServices');

const userSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  emailAddress: {type: String, required: true},
  username: {type: String, required: true},
  password: {type: String, required: true},
});

// userSchema.pre('save', hashPassword(this.password));

userSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
})

module.exports = mongoose.model('User', userSchema);