const bcrypt = require('bcrypt');

module.exports = {

  async hashPassword(password) {
    // Encrypt our password ("hash & salt")
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    return hashPassword;
  },
}