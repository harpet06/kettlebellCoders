import React from "react";
import ReactDOM from "react-dom";
import WorkoutCardCollection from "./WorkoutCardCollection";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WorkoutCardCollection />, div);
  ReactDOM.unmountComponentAtNode(div);
});
