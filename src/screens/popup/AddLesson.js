import React from "react";
import "./AddLesson.css";
const AddLesson = (props) => {
  return props.trigger ? (
    <div className="popup schedule-popup">
      <div className="popup-inner">
        <button
          className="close-btn"
          onClick={() => props.setTrigger(false)}
          style={{
            borderRadius: 5,
            border: "none",
            color: "#fff",
            backgroundColor: "#393457",
          }}
        >
          ×
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default AddLesson;
