const userRepo = require("../repository/index");
const {
  encryptPassword,
  comparePassword,
} = require("../../../../utils/bcrypt");
const { signJwt } = require ('../../../../utils/jwt')
const { BadRequestException } = require("../../../../utils/execeptions");

class UserService {
  async signUp(email, password) {
    const hashedPassword = await encryptPassword(password);
    const user = await userRepo.create(email, hashedPassword);
    return { data: "user has been created successfully" };
  }

  async logIn(email, password) {
    const user = await userRepo.findUser(email);
    if (!user || !(await comparePassword(password, user.password))) {
      throw new BadRequestException("Invalid credentials");
    }
    const accessToken = signJwt({ email: user.email, id: user.id });
    return { accessToken };
  }
}

module.exports = new UserService();
