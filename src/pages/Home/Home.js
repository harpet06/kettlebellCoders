import React from "react";
import { Component } from "react";
import StyledButton from "../../components/StyledButton/StyledButton";
import Jumbotron from "../../components/Jumbotron/Jumbotron";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome to kettlebellCoders",
      body: "Looking to get fit and learn to code? Look no further",
      buttonLink: "workout",
      buttonText: "Take me to the gym"
    };
  }

  componentDidMount() {
    console.log("Home Page");
  }

  render() {
    return (
      <div>
        <br />
        <Jumbotron title={this.state.title} body={this.state.body} />
        <StyledButton
          href={this.state.buttonLink}
          buttonText={this.state.buttonText}
        ></StyledButton>
      </div>
    );
  }
}

export default Home;
