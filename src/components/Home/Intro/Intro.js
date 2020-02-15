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
              Jsem webový vývojář, který vystudoval obor softwarové inženýrství na FIT.ČVUT.
              Kariérně jsem začínal prací s&nbsp;databázemi a tvorbu reportů s využitím excelových maker pro oddělení
              finančního plánování české banky. Poté jsem se ale přesunul k&nbsp;tomu, co mě baví více, tedy tvorbě
              webových aplikací. Nejvíce zkušeností mám s programováním v&nbsp;PHP a frameworku Nette. V poslední době
              dělám čistě front-end v&nbsp;Reactu, nyní pro <a href="https://www.volkswagen.de">Volkswagen</a>. Více
              o&nbsp;mých projektech zjistíte zde:
          </p>
          <ButtonGroup>
              <NavLink to="/projects" role="button" className="btn btn-primary">
                  Projekty <i className="fas fa-code"/>
              </NavLink>
              <DropdownButton as={ButtonGroup} title={demoButtonLabel}>
                  <Dropdown.Item as={NavLink} to="/demos/todo">Úkolníček</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/demos/burger-builder">Burger builder</Dropdown.Item>
              </DropdownButton>
          </ButtonGroup>
      </Jumbotron>
  );
};

export default intro;
