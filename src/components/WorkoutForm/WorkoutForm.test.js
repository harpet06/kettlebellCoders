import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import WorkoutForm from "./WorkoutForm";

const data = {
  workoutType: "kettlebell",
  workoutDifficulty: "beginner",
  workoutNumber: 2
};

const handleChange = jest.fn();

const onSubmit = jest.fn();

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<WorkoutForm data={data} handleChange={handleChange} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("submits", () => {
  const { getByTestId } = render(
    <WorkoutForm data={data} handleChange={handleChange} onSubmit={onSubmit} />
  );
  fireEvent.submit(getByTestId("workoutForm"));
  expect(onSubmit).toHaveBeenCalled();
});
