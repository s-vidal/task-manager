import React, {useEffect, useState} from "react";
import "./TasksDashboard.css";
import Task from "./Task";
import TaskModal from "./TaskModal";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import * as dataHandler from "../lib/DataHandler";

const TasksDashBoard = ({user}) => {
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  useEffect(() => {
    if (user) {
      const unsubscribeTask = dataHandler.getUserTasksSnapshot(
        user,
        "to-do",
        (data) => {
          console.log(data);
          setTasks(data);
        }
      );

      const unsubscribeDone = dataHandler.getUserTasksSnapshot(
        user,
        "done",
        (data) => {
          console.log(data);
          setDoneTasks(data);
        }
      );
      return () => {
        unsubscribeTask();
        unsubscribeDone();
      };
    }
  }, [user]);

  return (
    <div className="tasks">
      <div className="tasks-container">
        <div className="row mt-5">
          <h2>Task-Manager</h2>
        </div>
        <div className="row mt-2">
          <h5 className="text-secondary">Welcome {user}</h5>
        </div>
        <div className="row mt-5">
          <div className="col-6 to-do text-center pr-5">
            <div className="row mb-4">
              <div className="d-flex col-3 justify-content-start p-0">
                <h4 className="font-weight-bold">To Do</h4>
                <h4 className="text-secondary ml-2">({tasks.length})</h4>
              </div>
              <div className="col-6">
                <button
                  type="button"
                  className=" btn custom-btn rounded-pill"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  + New Task
                </button>
              </div>
              <TaskModal user={user} />
            </div>
            <div className="row">
              {tasks.length > 0 &&
                tasks.map((task, index) => (
                  <Task
                    collection="to-do"
                    taskId={task["id"]}
                    user={user}
                    key={index}
                    text={task["task"]}
                  />
                ))}
            </div>
          </div>
          <div className="col-6 done">
            <div className="row mb-4">
              <h4 className="font-weight-bold">Done</h4>
              <h4 className="text-secondary ml-2">({doneTasks.length})</h4>
            </div>
            <div className="row">
              {doneTasks.length > 0 &&
                doneTasks.map((task, index) => (
                  <Task
                    collection="done"
                    taskId={task["id"]}
                    user={user}
                    key={index}
                    text={task["task"]}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksDashBoard;
