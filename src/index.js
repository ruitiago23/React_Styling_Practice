import React from "react";
import ReactDOM from "react-dom";

const Time = new Date().getHours();

let greeting;

const customStyle = {
  color: "",
};

if (Time < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (Time < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}
ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
