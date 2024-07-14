const userService = require("../services/index");

class UserController {
  async signUp(req, res) {
    const { email, password } = req.body
    const data = await userService.signUp(email, password)
    return { data };
  }

  async logIn(req, res) {
    const { email, password } = req.body;
    const data = await userService.logIn(email, password)
    return { data } 
  }
}

module.exports = new UserController();
