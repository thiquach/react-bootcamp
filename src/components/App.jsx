import React from "react";
import Login from "./Login";

var isLogin = false;

function RenderConditionally() {
  if (isLogin) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}

function App() {
  return <div className="container">{RenderConditionally()}</div>;
}

export default App;
