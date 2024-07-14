const { BaseError, httpStatusCodes } = require("./baseError");

//custom error claases
class NotFoundException extends BaseError {
  constructor(description, statusCode = httpStatusCodes.NOT_FOUND) {
    super(statusCode, description);
  }
}

class BadRequestException extends BaseError {
  constructor(description, type, statusCode = httpStatusCodes.BAD_REQUEST) {
    super(statusCode, description);
  }
}

class ForbiddenException extends BaseError {
  constructor(description, statusCode = httpStatusCodes.FORBIDDEN) {
    super(statusCode, description);
  }
}

class ValidationException extends BaseError {
  constructor(
    validation,
    description = "validation Error",
    statusCode = httpStatusCodes.VALIDATION
  ) {
    super(statusCode, description);
  }
}

class UnauthorizedException extends BaseError {
  constructor(description, statusCode = httpStatusCodes.Unauthorized) {
    super(statusCode, description);
  }
}

module.exports = {
  NotFoundException,
  BadRequestException,
  ForbiddenException,
  ValidationException,
  UnauthorizedException
};
