import React, { useState } from "react";
import taskService from "../../services/taskService";
import './TaskForm.scss';

const CreateTask = () => {
  const [newTask, setNewTask] = useState({
    title: "",
    content: "",
  });

  const handleCreateNote = async (e) => {
    e.preventDefault();
    try {
      await taskService.createTask(newTask.title, newTask.content);
      setNewTask({
        title: "",
        content: "",
      });
      window.location.reload();
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="note-form-container">
      <form className="noteForm">
        <h2>Create New Task</h2>
  
        <div className="form-row">
          <label className="label">Title:</label>
          <input
            type="text"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
        </div>
  
        <div className="form-row">
          <label className="label">Content:</label>
          <textarea
            value={(newTask, e)=> setNewTask({ ...newTask, content: e.target.value })}
          />
        </div>
  
        <button onClick={handleCreateNote}>Add</button>
      </form>
    </div>
  );
};

export default CreateTask;
