import React from "react";
import BootstrapJumbotron from "react-bootstrap/Jumbotron";
import StyledButton from "../StyledButton/StyledButton";

function Jumbotron(props) {
  return (
    <BootstrapJumbotron style={{ marginBottom: "0px"}}>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <p>
        {props.buttonText ? (
          <StyledButton href={props.href} buttonText={props.buttonText} />
        ) : null}
      </p>
    </BootstrapJumbotron>
  );
}

export default Jumbotron;
