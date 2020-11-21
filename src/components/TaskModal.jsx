import React, {useState} from "react";
import "./TaskModal.css";
import SelectColorButtons from "./SelectColorButtons";
import * as dataHandler from "../lib/DataHandler";

const TaskModal = ({user}) => {
  const [newTask, setNewTask] = useState("");
  const [taskColor, setTaskColor] = useState("purple");

  return (
    <>
      <div
        className="modal fade"
        style={{paddingTop: "20rem", paddingLeft: "5rem"}}
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded shadow">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="exampleModalLabel">
                New Task:
              </h5>
              <button
                onClick={() => {
                  setTaskColor("purple");
                }}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body  border-0 ml-3 mr-3">
              <SelectColorButtons
                taskColor={taskColor}
                setTaskColor={setTaskColor}
              />
              <div className="row">
                <textarea
                  onChange={(e) => {
                    setNewTask(e.target.value);
                  }}
                  value={newTask}
                  className="form-control"
                  placeholder="task.."
                  aria-label="With textarea"
                ></textarea>
              </div>
            </div>
            <div className="modal-footer border-0 p-0">
              <button
                disabled={newTask.length > 0 ? false : true}
                className="btn btn-secondary add-task-btn m-0"
                onClick={() => {
                  dataHandler.addTaskByUser(user, newTask, taskColor);
                  setNewTask("");
                  setTaskColor("purple");
                }}
                type="button"
                data-dismiss="modal"
              >
                <h5>Add</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskModal;
