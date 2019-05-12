import React, {Component} from 'react';
import DemosHeader from "../../../components/Demos/DemosHeader/DemosHeader";
import Burger from "../../../components/Demos/BurgerBuilder/Burger";
import BuildControls from "../../../components/Demos/BurgerBuilder/BuildControls/BuildControls";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import OrderSummary from "../../../components/Demos/BurgerBuilder/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 7,
  cheese: 10,
  meat: 30,
  bacon: 12
};

const INGREDIENTS_TRANSLATIONS = {
  salad: 'Salát',
  cheese: 'Sýr',
  meat: 'Maso',
  bacon: 'Slanina'
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 29,
    purchasable: false,
    purchasing: false
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({purchasable: sum > 0});
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({purchasing: true});
  };

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  };

  purchaseContinueHandler = () => {
    this.setState({purchasing: false});
    alert('Kdyby to již bylo naprogramované, pokračovali byste dál :-)');
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <>
        <DemosHeader/>
        <h2>Burger builder</h2>
        <Row>
          <Col md="12" lg="9">
            <Burger ingredients={this.state.ingredients} />
          </Col>
          <Col md="12" lg="3">
            <BuildControls
              ingredientAdded={this.addIngredientHandler}
              ingredientRemoved={this.removeIngredientHandler}
              disabled={disabledInfo}
              purchasable={this.state.purchasable}
              ordered={this.purchaseHandler}
              price={this.state.totalPrice}
              translations={INGREDIENTS_TRANSLATIONS} />
          </Col>
        </Row>

        <Modal show={this.state.purchasing} onHide={this.purchaseCancelHandler}>
          <Modal.Header closeButton>
            <Modal.Title>Vaše objednávka</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <OrderSummary
              ingredients={this.state.ingredients}
              purchaseCancelled={this.purchaseCancelHandler}
              purchaseContinued={this.purchaseContinueHandler}
              price={this.state.totalPrice}
              translations={INGREDIENTS_TRANSLATIONS} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.purchaseCancelHandler}>
              Zrušit
            </Button>
            <Button variant="primary" onClick={this.purchaseContinueHandler}>
              Pokračovat
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default BurgerBuilder
