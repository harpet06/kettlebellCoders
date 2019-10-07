import React from "react";
import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class WorkoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutType: "kettlebell",
      workoutDifficulty: "beginner",
      workoutNumber: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    alert(
      `the values we have are workout type: ${this.state.workoutType} and workout difficulty: ${this.state.workoutDifficulty} and workout no: ${this.state.workoutNumber}`
    );
    event.preventDefault();
  }

  render() {
    return (
      <Form
        className="block-example border border-secondary"
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "22rem",
          float: "none",
          margin: "0 auto",
          padding: "0.5rem",
          marginBottom: "0.5rem"
        }}
        onSubmit={this.handleSubmit}
      >
        <Form.Group controlId="workoutType">
          <Form.Label>Select your workout type</Form.Label>
          <Form.Control
            as="select"
            name="workoutType"
            onChange={this.handleChange}
          >
            <option value="kettlebell">Kettlebell</option>
            <option value="coding">Coding</option>
            <option value="both">Both</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="workoutDifficulty">
          <Form.Label>Difficulty</Form.Label>
          <Form.Control
            as="select"
            name="workoutDifficulty"
            value={this.state.workoutDifficulty}
            onChange={this.handleChange}
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="workoutNumber">
          <Form.Label>How many exercises</Form.Label>
          <Form.Control
            as="select"
            name="workoutNumber"
            value={this.state.workoutNumber}
            onChange={this.handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default WorkoutForm;
