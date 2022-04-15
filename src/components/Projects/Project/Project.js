import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Project = (props) => {
  const imageStyle = props.imageClick ? { cursor: "pointer" } : {};

  return (
    <Card className="mb-4">
      <Row className="no-gutters">
        <Col md="4">
          <Card.Img
            src={props.img}
            alt={props.name}
            onClick={props.imageClick}
            style={imageStyle}
          />
        </Col>
        <Col md="8">
          <Card.Body>
            <h5 className="card-title">{props.name}</h5>
            <Card.Text as="div">{props.children}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default Project;
