import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
import Button from "react-bootstrap/Button";
import {FormattedMessage} from "react-intl";


const buildControls = (props) => {
  const controls = Object.keys(props.translations).map(ingredient => {
    return {type: ingredient, label: props.translations[ingredient]};
  });

  return (
    <div className="BuildControls">
      <h3 className="mb-3">
        <FormattedMessage id="price-czk" values={{price: props.price.toFixed(2)}}/>
      </h3>
      <div className="BuildControlsControls">
        {controls.map(ctrl => (
          <BuildControl
            key={ctrl.type}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}/>
        ))}
      </div>
      <Button size="lg" className="mt-4" disabled={!props.purchasable} onClick={props.ordered}>
        <FormattedMessage id="to-order"/>
      </Button>
    </div>
)};

export default buildControls;
