const taskService = require("../services");

class TaskController {
  async getAllTasks(req, res) {
    return await taskService.getAllTasks();
  }

  async getTask(req, res) {
    const { id } = req.params    
    const { data } = await taskService.getTask(parseInt(id));
    return { data };
  }

    async addTask(req, res) {
      const data = req.body;
      return await taskService.addTask(data)
    }

    async updateTask(req, res) {
      const { id } = req.params  
      const data = req.body
      return await taskService.updateTask(parseInt(id), data);
    }

  async delete(req, res) {
    const { id } = req.params;
    return await taskService.deleteTask(parseInt(id));
  }
}

module.exports = new TaskController();
