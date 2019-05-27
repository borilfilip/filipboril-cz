import React from 'react';
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const error404 = () => (
    <Alert variant="danger">
        <Row>
            <Col xs="auto">
                <span style={{fontSize: '3rem'}}><i className="fas fa-unlink"/></span>
            </Col>
            <Col>
                <Alert.Heading>Stránka nenalezena!</Alert.Heading>
                <p>
                    Ale ne! Stránku, kterou se pokoušíte navštívit, se na tomto webu nenachází. Vyberte si z menu
                    nahoře.
                </p>
            </Col>
        </Row>
    </Alert>
);

export default error404;