import React, { useEffect, useState } from "react";
import taskService from "../../services/taskService";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./TasksList.scss";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await taskService.getAlltasks();
      if (response && response.status === 200) {
        setTasks(response.data);
      } else {
        setError(response.message || "No Tasks Found");
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const editTaskHandler = (id) => {
    navigate(`/tasks/${id}`);
  };

  const deleteTaskHandler = async (id) => {
    try {
      const response = await taskService.deleteTask(id);
      console.log(response);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  return (
    <div>
      <div className="container">
        {error && <p style={{ color: 'red' }}>{error}</p>} 
        {tasks.map((task) => (
          <div className="note" key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.content}</p>
            <div className="task-footer">
              <div className="icons">
                <MdModeEdit className="edit-icon" size="1.3em" onClick={() => editTaskHandler(task.id)} />
                <MdDeleteForever className="delete-icon" size="1.3em" onClick={() => deleteTaskHandler(task.id)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
