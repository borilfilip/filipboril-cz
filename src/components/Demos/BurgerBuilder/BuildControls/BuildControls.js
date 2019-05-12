import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
import Button from "react-bootstrap/Button";


const buildControls = (props) => {
  const controls = Object.keys(props.translations).map(ingredient => {
    return {type: ingredient, label: props.translations[ingredient]};
  });

  return (
    <div className="BuildControls">
      <h3 className="mb-3">Cena: {props.price.toFixed(2)} Kč</h3>
      <div className="BuildControlsControls">
        {controls.map(ctrl => (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}/>
        ))}
        <Button
          size="lg"
          className="mt-4"
          disabled={!props.purchasable}
          onClick={props.ordered}>Objednat
        </Button>
      </div>
    </div>
)};

export default buildControls;
