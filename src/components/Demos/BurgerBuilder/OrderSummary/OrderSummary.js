import React from 'react';
import {FormattedHTMLMessage, FormattedMessage} from "react-intl";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (<div key={igKey}>{props.ingredients[igKey]}× {props.translations[igKey]}</div>);
    });

  return (
    <>
      <FormattedMessage id="delicious-burger"/>:
      <div className="pl-4 mb-3">
        {ingredientSummary}
      </div>
      <p><FormattedHTMLMessage id="total-price" values={{price: props.price.toFixed(2)}}/></p>
      <p><FormattedMessage id="continue-order"/></p>
    </>
  );
};

export default orderSummary;
