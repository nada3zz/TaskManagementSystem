const { ForbiddenException, UnauthorizedException } = require('../../utils/execeptions')
const { verifyJwt } = require('../../utils/jwt');

const isAuthenticated = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      const user = verifyJwt(token);
      if (user) {
        req.user = user;
        next();
      } else {
        throw new ForbiddenException("Forbidden Resource")
      }
    } else {
      throw new UnauthorizedException("Unauthorized User")
    }
};

module.exports = { isAuthenticated };

