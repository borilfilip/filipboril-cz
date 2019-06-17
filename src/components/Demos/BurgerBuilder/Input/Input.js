import React from 'react';
import Form from "react-bootstrap/Form";

const input = (props) => {

    let hint = null;
    if (props.hint) {
        hint = (
            <Form.Text className="text-muted">
                {props.hint}
            </Form.Text>
        )
    }

    return (
        <Form.Group controlId="formBasicEmail">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.type} placeholder={props.label} value={props.value}
                          onChange={props.onChange}/>
            {hint}
        </Form.Group>
    )
};

export default input;
