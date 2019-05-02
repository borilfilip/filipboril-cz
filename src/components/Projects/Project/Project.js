import React from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Project = (props) => {
  return (
    <Card className="mb-3">
      <Row className="no-gutters">
        <Col md="4">
          <Card.Img src={props.img} alt={props.name}/>
        </Col>
        <Col md="8">
          <Card.Body>
            <h5 className="card-title">{props.name}</h5>
            <Card.Text>{props.children}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default Project;
