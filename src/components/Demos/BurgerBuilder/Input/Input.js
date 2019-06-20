import React from 'react';
import Form from "react-bootstrap/Form";

const input = (props) => {

    let hint = null;
    if (props.hint) {
        hint = (
            <Form.Text className="text-muted">
                {props.config.hint}
            </Form.Text>
        )
    }

    let control = null;
    switch (props.config.type) {
        case 'select':
            control = (
                <Form.Control as="select">
                    {props.config.options.map((option) => <option key={option.value}
                                                                  value={option.value}>{option.displayValue}</option>)}
                </Form.Control>
            );
            break;
        default:
            control = (
                <Form.Control type={props.config.type} placeholder={props.config.label} value={props.value}
                              onChange={props.onChange}/>
            );
    }

    return (
        <Form.Group controlId={props.name}>
            <Form.Label>{props.config.label}</Form.Label>
            {control}
            {hint}
        </Form.Group>
    )
};

export default input;
