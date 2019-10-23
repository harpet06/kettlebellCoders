import React from "react";
import Button from "react-bootstrap/Button";

function StyledButton(props) {
  return (
    <Button
      variant="secondary"
      href={props.href}
      onClick={props.onClick}
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        height: "100%",
        maxWidth: "300px",
        marginBottom: props.buttonMarginBottom,
      }}>
      {props.buttonText}
    </Button>
  );
}

export default StyledButton;
