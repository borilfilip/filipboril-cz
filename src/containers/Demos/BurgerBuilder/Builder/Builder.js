import React, {Component} from 'react';
import Burger from "../../../../components/Demos/BurgerBuilder/Burger/Burger";
import BuildControls from "../../../../components/Demos/BurgerBuilder/BuildControls/BuildControls";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import OrderSummary from "../../../../components/Demos/BurgerBuilder/OrderSummary/OrderSummary";
import {connect} from "react-redux";
import * as actions from '../../../../store/burgerBuilder/actions';

const INGREDIENT_TRANSLATIONS = {
    salad: 'Salát',
    cheese: 'Sýr',
    meat: 'Maso',
    bacon: 'Slanina'
};

class Builder extends Component {
  state = {
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
    return sum > 0;
  };

  purchaseHandler = () => {
    this.setState({purchasing: true});
  };

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  };

  purchaseContinueHandler = () => {
    this.setState({purchasing: false});
    this.props.history.push('/demos/burger-builder/checkout');
  };

  render() {
    const disabledInfo = {
      ...this.props.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <>
        <Row>
          <Col md="12" lg="9">
            <Burger ingredients={this.props.ingredients} />
          </Col>
          <Col md="12" lg="3">
            <BuildControls
              ingredientAdded={this.props.onIngredientAdded}
              ingredientRemoved={this.props.onIngredientRemoved}
              disabled={disabledInfo}
              purchasable={this.updatePurchaseState(this.props.ingredients)}
              ordered={this.purchaseHandler}
              price={this.props.totalPrice}
              translations={INGREDIENT_TRANSLATIONS} />
          </Col>
        </Row>

        <Modal show={this.state.purchasing} onHide={this.purchaseCancelHandler}>
          <Modal.Header closeButton>
            <Modal.Title>Vaše objednávka</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <OrderSummary
              ingredients={this.props.ingredients}
              purchaseCancelled={this.purchaseCancelHandler}
              purchaseContinued={this.purchaseContinueHandler}
              price={this.props.totalPrice}
              translations={INGREDIENT_TRANSLATIONS} />
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

const mapStateToProps = state => {
  return {
    ingredients: state.builder.ingredients,
    totalPrice: state.builder.totalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingredient) => dispatch(actions.addIngredient(ingredient)),
    onIngredientRemoved: (ingredient) => dispatch(actions.removeIngredient(ingredient))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Builder)
