import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "./kettlebell.svg";

function Header(props) {
  return (
    <header>
      <Navbar bg="secondary" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          {props.headerTitle}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/workout">Workout</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
