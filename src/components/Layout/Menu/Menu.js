import React from 'react';
import { withRouter } from 'react-router';
import {matchPath, NavLink} from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const menu = (props) => {
  const pathname = props.location.pathname;
  const demosActive = matchPath(pathname, {path: "/demos"}) !== null;

  return (
    <Navbar variant="dark" bg="dark" expand="md" fixed="top" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#/">Filip Bořil</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} exact to="/">O mně</Nav.Link>
            <Nav.Link as={NavLink} to="/projects">Projekty</Nav.Link>
            <NavDropdown title="Ukázky" id="basic-nav-dropdown" className={demosActive ? "active" : null}>
              <NavDropdown.Item as={NavLink} to="/demos/todo">Úkolníček</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/demos/burger-builder">Burger builder</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withRouter(menu);
