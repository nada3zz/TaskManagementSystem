const { compare, hash } = require('bcrypt');

const encryptPassword = async (password, salt = 12) => {
  const hashedPassword = await hash(password, salt);
  return hashedPassword;
};

const comparePassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

module.exports = { encryptPassword, comparePassword };
