import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const editItem = (props) => {
    return (
        <Form onSubmit={!props.saving ? props.save : null}>
            <Row>
                <Col>
                    <Form.Control type="text" name="note" value={props.content} onChange={props.change}
                                  ref={props.inputRef}/>
                </Col>
                <Col xs="auto">
                    <Button type="submit" variant="primary" size="sm" disabled={props.saving}>
                        {props.saving ? "Ukládání..." : <i className="fas fa-edit"/>}
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default editItem;
