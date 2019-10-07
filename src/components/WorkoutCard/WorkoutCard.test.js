import React from "react";
import ReactDOM from "react-dom";
import WorkoutCard from "./WorkoutCard";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WorkoutCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
