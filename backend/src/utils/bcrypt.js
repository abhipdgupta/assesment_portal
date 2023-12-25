const bcrypt = require('bcryptjs');

const saltRounds = 10;

const hashPassword = async (password) => {
  return await bcrypt.hash(password, saltRounds);
};

const comparePasswords = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

module.exports = {
  hashPassword,
  comparePasswords,
};
