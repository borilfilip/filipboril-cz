import React from 'react';
import Form from "react-bootstrap/Form";

const input = (props) => {

    let hint = null;
    if (props.config.hint) {
        hint = <Form.Text className="text-muted">{props.config.hint}</Form.Text>
    }

    let feedback = null;
    if (props.valid === false) {
        feedback = <Form.Control.Feedback type="invalid">To nevypadá správně</Form.Control.Feedback>
    }

    let control = null;
    const commonInputProps = {
        value: props.value,
        onChange: props.onChange,
        isValid: props.valid,
        isInvalid: props.valid === false
    };

    switch (props.config.type) {
        case 'select':
            control = (
                <Form.Control as="select" {...commonInputProps}>
                    {props.config.options.map(
                        (option) => <option key={option.value} value={option.value}>{option.displayValue}</option>
                    )}
                </Form.Control>
            );
            break;
        default:
            control = (
                <Form.Control type={props.config.type} placeholder={props.config.label} {...commonInputProps}/>
            );
    }

    return (
        <Form.Group controlId={props.name}>
            <Form.Label>{props.config.label}</Form.Label>
            {control}
            {feedback}
            {hint}
        </Form.Group>
    )
};

export default input;
