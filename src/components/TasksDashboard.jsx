import React from "react";
import "./TasksDashboard.css";
import Task from "./Task";
import TaskModal from "./TaskModal";

const TasksDashBoard = ({user}) => {
  return (
    <div className="tasks">
      <div className="tasks-container">
        <div className="row mt-5">
          <h2>Task-Manager</h2>
        </div>
        <div className="row mt-2">
          <h5 className="text-secondary">Welcome: {user}</h5>
        </div>
        <div className="row mt-5">
          <div className="col-6 to-do text-center pr-5">
            <div className="row">
              <div className="col-6">
                <h4 className="font-weight-bold">To Do</h4>
              </div>
              <div className="col6">
                <button
                  type="button"
                  className=" btn btn-outline-secondary rounded-pill"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  + New Task
                </button>
              </div>

              <TaskModal />
            </div>
            <div className="row">
              <Task />
            </div>
          </div>
          <div className="col-6 done">
            <div className="row">
              <h4 className="font-weight-bold">Done</h4>
            </div>
            <div className="row">
              <Task />
            </div>
            <div className="row">
              <Task />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksDashBoard;
