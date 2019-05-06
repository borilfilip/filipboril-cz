import React from 'react';
import './BuildControl.css'
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const buildControl = (props) => (
  <div className="BuildControl">
    {props.label}
    <ButtonGroup size="sm" className="ml-3">
      <Button
        variant="danger"
        onClick={props.removed}
        disabled={props.disabled}><i className="fas fa-minus"/></Button>
      <Button
        variant="secondary"
        onClick={props.added}><i className="fas fa-plus"/></Button>
    </ButtonGroup>
  </div>
);

export default buildControl;
