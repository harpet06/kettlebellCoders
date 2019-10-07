import React from "react";
import Button from "react-bootstrap/Button";

function StyledButton(props) {
  return (
    <Button variant="primary" href={props.href}>
      {props.buttonText}
    </Button>
  );
}

export default StyledButton;
