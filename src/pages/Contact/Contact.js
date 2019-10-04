import React from "react";
import { Component } from "react";
import Header from "../../components/Header";

class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log("contact page");
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default Contact;
