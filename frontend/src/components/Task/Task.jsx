import React from "react";

const TaskDetails = ({ title, content, status, onUpdateTask, onDeleteTask }) => {
  return (
    <div>
      <h2>Note Details</h2>
      <p>Title: {title}</p>
      <p>Content: {content}</p>
      <p>Status: {status}</p>
      <button onClick={onUpdateTask}>Update</button>
      <button onClick={onDeleteTask}>Delete</button>
    </div>
  );
};

export default TaskDetails;

