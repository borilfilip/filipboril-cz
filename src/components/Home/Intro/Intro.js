import React from 'react';
import { NavLink } from "react-router-dom";
import './Intro.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";

const intro = (props) => {
  const demoButtonLabel = <>Ukázky <i className="fab fa-react" /></>;

  return (
      <Jumbotron>
          <h1>Bc. Filip Bořil</h1>
          <p className="lead">
              Jsem student magisterského programu informatika na FIT.ČVUT. Mým oborem je softwarové inženýrství se zaměřením na webové inženýrství.
              Kariérně jsem začínal prací s databázemi a tvorbu reportů s využitím excelových maker pro oddělení finančního plánování české banky.
              Poté jsem se ale přesunul k tomu, co mě baví více, tedy tvorbě webových aplikací. Nejvíce zkušeností mám s programováním v PHP a frameworku
              Nette. V poslední době mě zaujalo programování v Reactu, ve kterém je napsán také tento web.
          </p>
          <ButtonGroup>
              <NavLink to="/projects" role="button" className="btn btn-lg btn-primary">
                  Projekty <i className="fas fa-code"/>
              </NavLink>
              <DropdownButton as={ButtonGroup} title={demoButtonLabel} size="lg">
                  <Dropdown.Item as={NavLink} to="/demos/todo">Úkolníček</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/demos/burger-builder">Burger builder</Dropdown.Item>
              </DropdownButton>
          </ButtonGroup>
      </Jumbotron>
  );
};

export default intro;
