// BaseError class to handle different types of errors
class BaseError extends Error {
  constructor(statusCode, description, meta= {}) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype);
    this.statusCode = statusCode;
    this.meta = meta;
    Error.captureStackTrace(this);      // Capture the stack trace for better error tracking
  }
}


const httpStatusCodes = {
  OK: 200,
  BAD_REQUEST: 400,
  VALIDATION: 422,
  Unauthorized: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER: 500,
  FORBIDDEN: 403,
};


module.exports = {
  BaseError,
  httpStatusCodes,
};
