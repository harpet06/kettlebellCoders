import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header(props) {
  return (
    <header>
      <Navbar
        bg="secondary"
        variant="dark"
        expand={props.expand}
        fixed={props.fixed}
      >
        <Navbar.Brand href="/">
          {" "}
          {props.logo ? (
            <img
              src={props.logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
          ) : null}
          {props.headerTitle}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {props.logo ? (
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/workout">Workout</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          ) : (
            <Nav
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%"
              }}
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/workout">Workout</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
