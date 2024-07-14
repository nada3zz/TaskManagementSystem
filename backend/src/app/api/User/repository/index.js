const prisma = require("../../../../utils/prisma");

class UserReposirty {
  async create(email, password) {
    return await prisma.user.create({
      data: {
        email,
        password,
      },
    });
  }

  async findUser(email) {
    return await prisma.user.findUnique({
      where: { email },
    });
  }
}

module.exports = new UserReposirty();