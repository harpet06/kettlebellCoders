import React from "react";
import { Component } from "react";
import StyledButton from "../../components/StyledButton/StyledButton";
import Jumbotron from "../../components/Jumbotron/Jumbotron";

class Home extends Component {
  constructor() {
    super();
    this.state = {
        title: "Welcome to kettlebellCoders",
        body: "Looking to get fit and learn to code? Look now further george",
        buttonText: "Take me to a workout"
    };
  }

  componentDidMount() {
    console.log("Home Page");
  }

  render() {
    return (
      <div>
          <br />
        <Jumbotron title={this.state.title} body={this.state.body}/>  
        <StyledButton>{this.state.buttonText}</StyledButton>
      </div>
    );
  }
}

export default Home;
