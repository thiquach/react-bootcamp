import React from "react";
import ReactDOM from "react-dom";

var date = new Date();
var fname = "Amy Q";

ReactDOM.render(
  <div>
    <h1>Created by: {fname}</h1>
    <p>Copyright: {date.getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
