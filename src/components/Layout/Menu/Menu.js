import React from 'react';
import {NavLink, matchPath} from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const menu = (props) => {
  let demosActive = matchPath(window.location.hash.substr(1), {path: "/demos"}) !== null; // TODO does not change

  return (
    <Navbar variant="dark" bg="dark" expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="#/">Filip Bořil</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#/">O mně</Nav.Link>
            <Nav.Link href="#/projects">Projekty</Nav.Link>
            <NavDropdown title="Ukázky" id="basic-nav-dropdown">
              <NavDropdown.Item href="#/demos/todo">Úkolníček</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default menu;
