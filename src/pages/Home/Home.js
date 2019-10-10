import React from "react";
import { Component } from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import ImageRoulette from "../../components/ImageRoulette/ImageRoulette";

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
      <div
        style={{
          height: "100%"
        }}
      >
        <Jumbotron
          title={this.state.title}
          body={this.state.body}
          href={this.state.buttonLink}
          buttonText={this.state.buttonText}
        />
        <ImageRoulette />
        <div
          style={{
            height: "200px",
            backgroundColor: "#e9ecef"
          }}
        />
      </div>
    );
  }
}

export default Home;
