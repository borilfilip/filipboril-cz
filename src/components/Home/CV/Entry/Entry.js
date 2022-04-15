import React from "react";
import { Col, Row } from "react-bootstrap";

const Entry = (props) => {
  return (
    <Row className="my-1">
      <Col sm="3">
        <strong>{props.name}</strong>
      </Col>
      <Col>{props.children}</Col>
    </Row>
  );
};

export default Entry;
