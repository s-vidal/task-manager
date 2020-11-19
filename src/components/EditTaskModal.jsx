import React, {useState, useEffect} from "react";
import "./EditTaskModal.css";
import * as dataHandler from "../lib/DataHandler";

const EditTaskModal = ({user, taskId, collection, text}) => {
  const [newTask, setNewTask] = useState(text);

  useEffect(() => {
    setNewTask(text);
  }, [text]);

  return (
    <>
      <div
        className="modal fade"
        style={{marginTop: "20rem", marginLeft: "5rem"}}
        id={taskId}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded shadow">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Task:
              </h5>
              <h5 className="modal-title ml-3">{text}</h5>
              <button
                onClick={() => {
                  setNewTask("");
                }}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body border-0 input-group">
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
            <div className="modal-footer border-0">
              <button
                onClick={() => {
                  dataHandler.editTaskById(user, taskId, collection, newTask);
                  setNewTask("");
                }}
                type="button"
                data-dismiss="modal"
                className="btn btn-outline-secondary rounded-pill"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTaskModal;
