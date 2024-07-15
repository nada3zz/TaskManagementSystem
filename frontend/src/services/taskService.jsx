import axios from 'axios';
import authHeader from './authHeader';

const API_URL = 'localhost:3000/api/tasks';

const TaskService = {
  getAllTasks: () => {
    return axios.get(`${API_URL}/`, { headers: authHeader() });
  },

  getTaskById: (id) => {
    return axios.get(`${API_URL}/${id}`, { headers: authHeader() });
  },

  createTask: (title, content) => {
    return axios.post(`${API_URL}/`, { title, content }, { headers: authHeader() });
  },

  updateTask: (id, title, content, status) => {
    return axios.put(`${API_URL}/${id}`, { title, content, status }, { headers: authHeader() });
  },

  deleteTask: (id) => {
    return axios.delete(`${API_URL}/${id}`, { headers: authHeader() });
  },
};

export default TaskService;
