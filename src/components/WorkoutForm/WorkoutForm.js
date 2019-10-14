import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function WorkoutForm(props) {
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
      onSubmit={props.onSubmit}
      data-testid="workoutForm"
    > <h3>Generate your workout!</h3>
      <Form.Group controlId="workoutType">
        <Form.Label>Select your workout type</Form.Label>
        <Form.Control
          as="select"
          name="workoutType"
          value={props.data.workoutType}
          onChange={props.handleChange}
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
          value={props.data.workoutDifficulty}
          onChange={props.handleChange}
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
          value={props.data.workoutNumber}
          onChange={props.handleChange}
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
        {props.buttonText}
      </Button>
    </Form>
  );
}

export default WorkoutForm;
