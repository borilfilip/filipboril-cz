import React, {Component} from 'react';
import DemosHeader from "./DemosHeader/DemosHeader";
import {Route, Switch} from "react-router";
import Builder from "./Builder/Builder";
import Checkout from "./Checkout/Checkout";
import Orders from "./Orders/Orders";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import Nav from "react-bootstrap/Nav";

class BurgerBuilder extends Component {
    render() {
        return (
            <>
                <DemosHeader/>
                <Navbar bg="light" expand="lg" className="mb-4">
                    <Navbar.Brand as={NavLink} exact to="/demos/burger-builder">BurgerBuilder</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={NavLink} exact to="/demos/burger-builder">Nový</Nav.Link>
                            <Nav.Link as={NavLink} to="/demos/burger-builder/orders">Objednávky</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route exact path="/demos/burger-builder" component={Builder}/>
                    <Route path="/demos/burger-builder/checkout" component={Checkout}/>
                    <Route path="/demos/burger-builder/orders" component={Orders}/>
                </Switch>
            </>
        );
    }
}

export default BurgerBuilder;
