import React from "react";

function Heading() {
  const date = new Date(2025, 1, 1, 11);
  const hours = date.getHours();
  let greeting;

  console.log(hours);
  const customStyle = {
    color: "",
  };

  if (hours < 12) {
    greeting = "Good Morning";
    customStyle.color = "green";
  } else if (hours < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "blue";
  } else {
    greeting = "Good Evening";
    customStyle.color = "red";
  }
  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;