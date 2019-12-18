import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import Space from "../Main";

export default function App() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#/">
          <img
            alt=""
            src="/images/startup.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#/mission">Mission</Nav.Link>
            <Nav.Link href="#/launchpad">Launch Pad</Nav.Link>
            <Nav.Link href="#/currency">Currency Converter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Space></Space>
    </Router>
  );
}
