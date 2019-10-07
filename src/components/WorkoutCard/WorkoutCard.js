import React from "react";
import Card from "react-bootstrap/Card";

function WorkoutCard(props) {
  return (
    <Card style={{ width: "22rem", marginBottom:"0.5rem" }} border="secondary">
      <Card.Header>
        <Card.Title>{props.cardTitle}</Card.Title>
      </Card.Header>
      <Card.Img variant="top" src={props.cardImage} />
      <Card.Body>
        <Card.Title>What?</Card.Title>
        <Card.Text>{props.cardWhatDescription}</Card.Text>
        <Card.Title>Do It</Card.Title>
        <Card.Text>{props.cardDoDescription}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WorkoutCard;
