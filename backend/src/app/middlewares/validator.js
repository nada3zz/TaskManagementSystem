const Joi = require("joi");
const { ValidationException } = require("../../utils/execeptions");

const convertToObject = (error) => {  //convert Joi validation error details to an object
  const errorMessages = error.details.reduce((result, item) => {
    // Reduce the error details into an object with field names as keys and error messages as values
    result[item.path[0]] = item.message;
    return result;
  }, {});
  return errorMessages;
};

// Middleware to validate request data against a given schema
const validator = (schemaToValidate) => (req, res, next) => {
  const schema = Joi.object(schemaToValidate);

  let { query, body, method, params } = req;

  const { error } = schema.validate(
    { ...body, ...params },
    { abortEarly: false } // Collect all errors instead of stopping at the first one
  );

  if (error) {
    const validationErrorObj = convertToObject(error);
    return next(new ValidationException(validationErrorObj));
  }
  next();
};

module.exports = { validator };


