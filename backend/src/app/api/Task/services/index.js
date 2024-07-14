const taskRepo = require("../repository");
const { BadRequestException } = require("../../../../utils/execeptions");

class TaskService {
  async getAllTasks() {
    const tasks = await taskRepo.findAll();
    return {
      data: tasks,
    };
  }

  async getTask(taskId) {
    const task = await taskRepo.findById(taskId);
    if (!task) throw new BadRequestException("Invalid id");
    return {
      data: task,
    };
  }

  async addTask(data) {
    const task = await taskRepo.create(data);
    return { data: 'task has been added successfully'};
  }

  async updateTask(data) {
    const task = await taskRepo.findById(parseInt(data.id));
    if (!task) throw new BadRequestException("Invalid id");
    await taskRepo.update(data);
    return { data:'task has been updated successfully' };
  }

  async deleteTask(taskId) {
    const task = taskRepo.findById(taskId);
    if (!task) throw new BadRequestException("Invalid id");
    await taskRepo.delete(taskId);
    return { data: {} };
  }
}

module.exports = new TaskService();
