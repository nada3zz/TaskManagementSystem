const Joi = require("joi");
const { escape } = require('validator');

const sanitizedString = Joi.string().custom((value, helpers) => {
  const sanitizedValue = escape(value);
  return sanitizedValue;
});

const add = {
  title: sanitizedString.required(),
  description: sanitizedString.required(),
  status: Joi.string()
};

const edit = {
  id: Joi.number().integer().required(),
  title: sanitizedString,
  description: sanitizedString,
  status: Joi.string()
};

const getDetailsSchema = {
  id: Joi.number().integer().required(),
};

const deleteSchema = {
  id: Joi.number().integer().required(),
};

const taskValidation = {
  add,
  edit,
  getDetailsSchema,
  delete: deleteSchema
};

module.exports = { taskValidation };
