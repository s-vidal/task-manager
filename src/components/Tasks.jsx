import React from "react";
import "./Tasks.css";

const Tasks = ({user}) => {
  return (
    <div className="tasks">
      <div className="container">
        <div className="row mt-5">
          <h1>Task-Manager</h1>
        </div>
        <div className="row mt-2">
          <h4 className="text-secondary">Welcome: {user}</h4>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
