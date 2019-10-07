import React from "react";
import ReactDOM from "react-dom";
import WorkoutCard from "./WorkoutCard";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WorkoutCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders with fields", () => {
  const { getByText } = render(
    <WorkoutCard
      cardTitle="title"
      cardWhatDescription="what"
      cardDoDescription="do"
    />
  );
  expect(getByText("title")).toBeInTheDocument();
  expect(getByText("what")).toBeInTheDocument();
  expect(getByText("do")).toBeInTheDocument();
});
