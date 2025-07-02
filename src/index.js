import React from "react";
import ReactDOM from "react-dom";

var fname = "Amy";
var lname = "Q";

ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}
    </h1>
    <p>My lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);