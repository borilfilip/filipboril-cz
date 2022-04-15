import React from "react";
import NavLink from "../../../shared/NavLink";
import "./Intro.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import { FormattedMessage } from "react-intl";
import { Col, Image, Row } from "react-bootstrap";

const intro = () => (
  <Jumbotron>
    <h1 className="headline">Bc. Filip Bořil</h1>
    <Row>
      <Col sm={12} md={3} className="mb-4 mb-md-0">
        <Image src="/img/profile.jpg" thumbnail />
      </Col>
      <Col sm={12} md={9}>
        <p className="lead">
          <FormattedMessage id="intro-text" />
        </p>
        <NavLink to="/projects" role="button" className="btn btn-primary">
          <FormattedMessage id="projects" /> <i className="fas fa-code" />
        </NavLink>
      </Col>
    </Row>
  </Jumbotron>
);

export default intro;
