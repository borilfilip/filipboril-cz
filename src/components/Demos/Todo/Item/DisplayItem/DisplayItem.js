import React from 'react';
import './DisplayItem.css'
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

const displayItem = (props) => {
    return (
        <Row>
            <Col className="displayItem-content" onClick={props.edit}>
                {props.content}
            </Col>
            <Col xs="auto">
                <Button variant="danger" size="sm" onClick={props.delete}><i className="fas fa-trash-alt"/></Button>
            </Col>
        </Row>
    )
};

export default displayItem;
