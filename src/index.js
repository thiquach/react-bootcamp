import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

customStyle.color = "blue";

ReactDOM.render(
  <div>
    <h1 style={customStyle}>Hello World! - inline styling on the fly</h1>
    <p>How inline styling is used</p>
  </div>,
  document.getElementById("root")
);
