const prisma = require("../../../../utils/prisma");

class TaskRepository {
  async findAll() {
    return await prisma.task.findMany();
  }

  async findById(taskId) {
    return await prisma.task.findUnique({
      where: {id : taskId}
    });
  }

  async create(data) {
    return await prisma.task.create({ data });
  }

  async update(taskId, data) {
    return await prisma.task.update({
      where: { id: taskId },
      data: { data },
    });
  }

  async delete(taskId) {
    return await prisma.task.delete({
      where: { id: taskId },
    });
  }
}

module.exports = new TaskRepository();
