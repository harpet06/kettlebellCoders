import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("contains company name", () => {
  const { getByText } = render(<Header />);
  expect(getByText("kettlebellCoders")).toBeInTheDocument();
});
