// controller middleware takes a service as a parameter to standardize the way responses and errors are managed
const controller = (service) => {
  return async (req, res, next) => {
    try {
      const result = await service(req, res);
      const { status = 200, data = null, message = ''} = result || {};
      res.json({
        status,
        data,
        message,
      });
    } catch (error) {
      next(error);
    }
  };
};

module.exports = { controller };
