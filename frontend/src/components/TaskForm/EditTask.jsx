import React, { useEffect, useState } from "react";
import taskService from "../../services/taskService";
import { useNavigate, useParams } from "react-router-dom";
import './TaskForm.scss';

const EditTask = () => {
  const [task, setTask] = useState({
    status: "pending",
});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchTask();
  }, [id]);

  const fetchTask = async (id) => {
    try {
      const response = await taskService.getTaskById(Number(id));
      setTask(response.data);
    } catch (error) {
      console.error("Error fetching note:", error);
    }
  };

  const handleUpdateTask = async () => {
    if (task) {
      try {
        await taskService.updateTask(
          task.title,
          task.content,
          task.status
        );
        navigate("/"); 
        window.location.reload();
      } catch (error) {
        console.error("Error updating note:", error);
      }
    }
  };

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div className="note-form-container">
      <form className="noteForm">
        <h2>Update Task</h2>

        <div className="form-row">
          <label className="label">Title:</label>
          <input
            type="text"
            value={task.title} 
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
        </div>

        <div className="form-row">
          <label className="label">Content:</label>
          <textarea
            value={task.content}
            onChange={(e) => setTask({ ...task, content: e.target.value })}
          />
        </div>
        <button type="button" onClick={handleUpdateTask}>Update</button>
      </form>
    </div>
  );
};

export default EditTask;

