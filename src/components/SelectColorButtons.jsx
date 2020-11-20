import React from "react";
import "./SelectColorButtons.css";

const SelectColorButtons = ({taskColor, setTaskColor}) => {
  const setBtnClass = (color) => {
    if (color === taskColor) {
      return `btn btn-${color} btn-${color}-selected rounded-pill`;
    }
    return `btn btn-${color} rounded-pill`;
  };

  return (
    <div className="row d-flex justify-content-center mb-5 mt-4">
      <button
        className={setBtnClass("red")}
        onClick={() => {
          setTaskColor("red");
        }}
      >
        Urgent
      </button>
      <button
        className={setBtnClass("orange")}
        onClick={() => {
          setTaskColor("orange");
        }}
      >
        Important
      </button>
      <button
        className={setBtnClass("purple")}
        onClick={() => {
          setTaskColor("purple");
        }}
      >
        Secondary
      </button>
    </div>
  );
};

export default SelectColorButtons;
