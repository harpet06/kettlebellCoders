import React from "react";
import BootstrapJumbotron from "react-bootstrap/Jumbotron";
import StyledButton from "../StyledButton/StyledButton";

const pTextStyling = {
  display: "block",
  backgroundColor: "rgba(0,0,0,0.5)",
  color: "#fff"
};

const h3TextStyling = {
  display: "relative",
  backgroundColor: "rgba(0,0,0,0.5)",
  color: "#fff"
};

function Jumbotron(props) {
  return (
    <BootstrapJumbotron
      style={{
        marginBottom: "0px",
        backgroundImage:
          `url(${props.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat-x'
      }}
    >
      <h1 style={h3TextStyling}>{props.title}</h1>
      <p style={pTextStyling}>{props.body}</p>
      <p>
        {props.buttonText ? (
          <StyledButton href={props.href} buttonText={props.buttonText} />
        ) : null}
      </p>
    </BootstrapJumbotron>
  );
}

export default Jumbotron;
