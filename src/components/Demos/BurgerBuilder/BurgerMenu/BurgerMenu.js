import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import React from "react";
import {connect} from "react-redux";
import * as actions from "../../../../store/burgerBuilder/actions";
import NavDropdown from "react-bootstrap/NavDropdown";

const burgerMenu = (props) => {
    const isLoggedIn = props.email;

    let userLink = (
        <Nav.Link as={NavLink} to="/demos/burger-builder/sign">
            <i className="fas fa-user"/> Přihlášení
        </Nav.Link>
    );

    if (isLoggedIn) {
        const login = (
            <>
                <i className="fas fa-user"/> {props.email.split('@')[0]}
            </>
        );

        userLink = (
            <NavDropdown alignRight title={login} id="user-dropdown">
                <NavDropdown.Item onClick={props.logout}><i
                    className="fas fa-sign-out-alt"/> Odhlásit</NavDropdown.Item>
            </NavDropdown>
        );
    }

    return (
        <Navbar bg="light" expand="md" className="mb-4">
            <Navbar.Brand as={NavLink} exact to="/demos/burger-builder">
                <i className="fas fa-hamburger"/> BurgerBuilder
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} exact to="/demos/burger-builder">
                        <i className="fas fa-plus"/> Nový
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/demos/burger-builder/orders">
                        <i className="fas fa-list"/> Objednávky
                    </Nav.Link>
                </Nav>
                <Nav>
                    {userLink}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

const mapStateToProps = state => {
    return {
        email: state.auth.email
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(burgerMenu);
