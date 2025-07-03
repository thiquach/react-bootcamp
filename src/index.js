import React from "react";
import ReactDOM from "react-dom";

const date = new Date(2025, 1, 1, 19);
const hours = date.getHours();
let greeting;

const customStyle = {
  color: "",
};

if (hours < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (hours > 12 && hours < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "blue";
} else {
  greeting = "Good Evening";
  customStyle.color = "green";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
    <p>Practice styling</p>
  </div>,
  document.getElementById("root")
);