import React from "react";
import Button from "react-bootstrap/Button";

function StyledButton(props) {
  return (
    <Button
      variant="primary"
      href={props.href}
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        height: "100%",
        maxWidth: "300px",
        marginBottom: "-40px"
      }}
    >
      {props.buttonText}
    </Button>
  );
}

export default StyledButton;
