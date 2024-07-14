const jwt = require('jsonwebtoken');
require('dotenv').config();

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

const signJwt = (payload, options = {}) => {
  return jwt.sign(payload, accessTokenSecret, {
    ...options,
  });
};

const verifyJwt = (token, options = {}) => {
  try {
    return jwt.verify(token, accessTokenSecret, {
      ...options,
    });
  } catch (error) {
    return null;
  }
};

module.exports = { signJwt, verifyJwt };
