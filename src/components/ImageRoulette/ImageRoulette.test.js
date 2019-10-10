import React from "react";
import ReactDOM from "react-dom";
import ImageRoulette from "./ImageRoulette";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ImageRoulette />, div);
  ReactDOM.unmountComponentAtNode(div);
});
