import React from "react";
import CardDeck from "react-bootstrap/CardDeck";

function WorkoutCardCollection(props) {
  return (
    <CardDeck
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
  }}
    >
      {props.workoutCards}
    </CardDeck>
  );
}

export default WorkoutCardCollection;
