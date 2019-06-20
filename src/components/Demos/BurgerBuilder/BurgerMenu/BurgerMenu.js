import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import React from "react";

const burgerMenu = (props) => (
    <Navbar bg="light" expand="md" className="mb-4">
        <Navbar.Brand as={NavLink} exact to="/demos/burger-builder">BurgerBuilder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={NavLink} exact to="/demos/burger-builder">Nový</Nav.Link>
                <Nav.Link as={NavLink} to="/demos/burger-builder/orders">Objednávky</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default burgerMenu;
