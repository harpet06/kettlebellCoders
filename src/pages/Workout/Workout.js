import React from "react";
import { Component } from "react";

class Workout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workout: {}
    };
  }

  componentDidMount() {
    console.log("workout page");
  }

  render() {
    return (
      <div>
        <h1> Workout page</h1>
      </div>
    );
  }
}

export default Workout