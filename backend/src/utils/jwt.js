const jwt = require('jsonwebtoken');
require('dotenv').config();

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

// Signs a JWT with the given payload and options, using the secret key
const signJwt = (payload, options = {}) => {
  return jwt.sign(payload, accessTokenSecret, {
    ...options,
  });
};

//Verifies a JWT with the given token and options, using the secret key. Returns the decoded token if valid, otherwise returns null.
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
