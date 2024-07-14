const Joi = require("joi");
const { ValidationException } = require("../../utils/execeptions");

const convertToObject = (error) => {
  const errorMessages = error.details.reduce((result, item) => {
    result[item.path[0]] = item.message;
    return result;
  }, {});
  return errorMessages;
};

const validator = (schemaToValidate) => (req, res, next) => {
  const schema = Joi.object(schemaToValidate);

  let { query, body, method, params } = req;

  const { error } = schema.validate(
    { ...body, ...params },
    { abortEarly: false }
  );

  if (error) {
    const validationErrorObj = convertToObject(error);
    return next(new ValidationException(validationErrorObj));
  }
  next();
};

module.exports = { validator };


