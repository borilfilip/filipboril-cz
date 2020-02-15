import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {matchPath, NavLink} from 'react-router-dom';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'

class Menu extends Component {
  state = {
    navBarExpanded: false
  };

  expandNavBar = (expanded) => {
    this.setState({navBarExpanded: expanded});
  };

  closeNavBar = () => {
    this.setState({navBarExpanded: false});
  };

  render() {
    const MenuNav = (props) => (
      <Nav.Link onClick={this.closeNavBar} as={NavLink} {...props}>{props.children}</Nav.Link>
    );
    const MenuNavDropdownItem = (props) => (
      <NavDropdown.Item onClick={this.closeNavBar} as={NavLink} {...props}>{props.children}</NavDropdown.Item>
    );
    const pathname = this.props.location.pathname;
    const demosActive = matchPath(pathname, {path: "/demos"}) !== null;

    return (
      <Navbar variant="dark" bg="dark" expand="md" fixed="top" onToggle={this.expandNavBar} expanded={this.state.navBarExpanded}>
        <Container>
          <Navbar.Brand as={NavLink} exact to="/">Filip Bořil</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <MenuNav exact to="/">O mně</MenuNav>
              <MenuNav to="/projects">Projekty</MenuNav>
              <NavDropdown title="Ukázky" id="basic-nav-dropdown" className={demosActive ? "active" : null}>
                <MenuNavDropdownItem to="/demos/todo">Úkolníček</MenuNavDropdownItem>
                <MenuNavDropdownItem to="/demos/burger-builder">Burger builder</MenuNavDropdownItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
}

export default withRouter(Menu);
