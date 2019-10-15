import React from "react";
import { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {}
    };
  }

  componentDidMount() {
    console.log("contact page mark 2");
  }

  render() {
    return (
      <div>
        <h1>Get in touch, please!</h1>
      </div>
    );
  }
}

export default Contact;
