import React from 'react';
import NavLink from "../../../shared/NavLink";
import './Intro.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import {FormattedMessage} from "react-intl";

const intro = () => {
  const demoButtonLabel = <><FormattedMessage id="demos"/> <i className="fab fa-react"/></>;

  return (
    <Jumbotron>
      <h1>Bc. Filip Bořil</h1>
      <p className="lead">
        <FormattedMessage id="intro-text" values={{volkswagen: <a href="https://www.volkswagen.de">Volkswagen</a>}}/>
      </p>
      <ButtonGroup>
        <NavLink to="/projects" role="button" className="btn btn-primary">
          <FormattedMessage id="projects"/> <i className="fas fa-code"/>
        </NavLink>
        <DropdownButton as={ButtonGroup} title={demoButtonLabel}>
          <Dropdown.Item as={NavLink} to="/demos/todo"><FormattedMessage id="memo"/></Dropdown.Item>
          <Dropdown.Item as={NavLink} to="/demos/burger-builder"><FormattedMessage id="burger-builder"/></Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
    </Jumbotron>
  );
};

export default intro;
