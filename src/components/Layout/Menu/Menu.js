import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {matchPath, NavLink} from 'react-router-dom';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import {FormattedMessage} from "react-intl";
import {animateScroll as scroll} from 'react-scroll';
import {scrollDuration} from "../../../shared/NavLink";

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

  navigate = () => {
    this.closeNavBar();
    scroll.scrollToTop({duration: scrollDuration});
  };

  languageChangeHandler = (language) => {
    this.closeNavBar();
    this.props.onLanguageChange(language);
  };

  render() {
    const MenuNav = (props) => (
      <Nav.Link onClick={this.navigate} as={NavLink} {...props}>{props.children}</Nav.Link>
    );
    const MenuNavDropdownItem = (props) => (
      <NavDropdown.Item onClick={this.navigate} as={NavLink} {...props}>{props.children}</NavDropdown.Item>
    );
    const logo = <Navbar.Brand onClick={this.navigate} as={NavLink} exact to="/">Filip Bořil</Navbar.Brand>;
    const pathname = this.props.location.pathname;
    const demosActive = matchPath(pathname, {path: "/demos"}) !== null;

    return (
      <Navbar variant="dark" bg="dark" expand="md" fixed="top" onToggle={this.expandNavBar}
              expanded={this.state.navBarExpanded}>
        <Container>
          {logo}
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <MenuNav exact to="/"><FormattedMessage id="about-me"/></MenuNav>
              <MenuNav to="/projects"><FormattedMessage id="projects"/></MenuNav>
              <NavDropdown title={<FormattedMessage id="demos"/>} id="basic-nav-dropdown"
                           className={demosActive ? "active" : null}>
                <MenuNavDropdownItem to="/demos/todo"><FormattedMessage id="memo"/></MenuNavDropdownItem>
                <MenuNavDropdownItem to="/demos/burger-builder"><FormattedMessage
                  id="burger-builder"/></MenuNavDropdownItem>
              </NavDropdown>
            </Nav>
            <LanguageSwitcher className="justify-content-end" language={this.props.language}
                              onLanguageChange={this.languageChangeHandler}/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
}

export default withRouter(Menu);
