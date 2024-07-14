const Joi = require("joi");
const { escape } = require("validator");

const sanitizedString = Joi.string().custom((value, helpers) => {
  const sanitizedValue = escape(value);
  return sanitizedValue;
});

const auth = {
  email: sanitizedString.email({ tlds: { allow: false } }).required(),
  password: sanitizedString
    .min(8)
    .pattern(
      new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])")
    )
    .required(),
};

module.exports.userValidation = auth;
