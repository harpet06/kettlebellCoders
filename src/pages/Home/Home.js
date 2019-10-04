import React from "react";
import { Component } from "react";
import StyledButton from "../../components/StyledButton/StyledButton";

class Home extends Component {
  constructor() {
    super();
    this.state = {
        buttonText: "This is a test button"
    };
  }

  componentDidMount() {
    console.log("Home Page");
  }

  render() {
    return (
      <div>
          <br />
        <StyledButton>{this.state.buttonText}</StyledButton>
      </div>
    );
  }
}

export default Home;
