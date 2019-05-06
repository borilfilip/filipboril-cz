import React from 'react';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (<div key={igKey}>{props.ingredients[igKey]}× {props.translations[igKey]}</div>);
    });

  return (
    <>
      Vynikající burger s následujícími ingrediencemi:
      <div className="pl-4 mb-3">
        {ingredientSummary}
      </div>
      <p>Cena celkem: <strong>{props.price.toFixed(2)} Kč</strong></p>
      <p>Pokračovat k odeslání objednávky?</p>
    </>
  );
};

export default orderSummary;
