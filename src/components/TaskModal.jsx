import React from "react";

const TaskModal = () => {
  return (
    <>
      <div
        className="modal fade"
        style={{marginTop: "20rem", marginLeft: "5rem"}}
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
                className="form-control"
                placeholder="task.."
                aria-label="With textarea"
              ></textarea>
            </div>
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-outline-secondary rounded-pill"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskModal;
