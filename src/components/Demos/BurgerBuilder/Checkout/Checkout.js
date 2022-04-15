import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Input from "../Input/Input";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Burger from "../Burger/Burger";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import withErrorHandler from "../../../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../../../store/burgerBuilder/actions";
import { checkInputValidity } from "../../../../shared/utility";
import { FormattedMessage } from "react-intl";

class Checkout extends Component {
  url = "https://www.filipboril.cz/api/burger";

  state = {
    orderForm: {
      email: {
        config: {
          type: "email",
          labelId: "email-label",
          hintId: "email-hint",
        },
        validation: {
          required: true,
          isEmail: true,
        },
        valid: undefined,
        value: "",
      },
      name: {
        config: {
          type: "text",
          labelId: "name-label",
        },
        validation: {
          required: true,
        },
        valid: undefined,
        value: "",
      },
      street: {
        config: {
          type: "text",
          labelId: "street-label",
        },
        validation: {
          required: true,
        },
        valid: undefined,
        value: "",
      },
      city: {
        config: {
          type: "text",
          labelId: "city-label",
        },
        validation: {
          required: true,
        },
        valid: undefined,
        value: "",
      },
      zip: {
        config: {
          type: "number",
          labelId: "zip-code-label",
        },
        validation: {
          required: true,
          isNumeric: true,
          minLength: 5,
          maxLength: 5,
        },
        valid: undefined,
        value: "",
      },
      country: {
        config: {
          type: "text",
          labelId: "country-label",
        },
        validation: {
          required: true,
        },
        valid: undefined,
        value: "",
      },
      delivery_method: {
        config: {
          type: "select",
          labelId: "delivery-method-label",
          options: [
            { value: "fast", displayValueId: "fast" },
            { value: "cheap", displayValueId: "cheap" },
          ],
        },
        validation: {},
        valid: true,
        value: "fast",
      },
    },
    formValid: false,
    showAlert: true,
    sendingOrder: false,
  };

  componentDidMount() {
    if (this.props.loginEmail) {
      this.setState({
        ...this.state,
        orderForm: {
          ...this.state.orderForm,
          email: {
            ...this.state.orderForm.email,
            value: this.props.loginEmail,
          },
        },
      });
    }
  }

  countIngredients = () => {
    return Object.values(this.props.ingredients).reduce(
      (acc, val) => acc + val
    );
  };

  checkFormValidity = (form) => {
    let isValid = true;
    for (let inputId in form) {
      isValid = form[inputId].valid && isValid;
    }
    return isValid;
  };

  inputChangedHandler = (event, id) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
    };
    const updatedInput = {
      ...updatedOrderForm[id],
    };

    updatedInput.value = event.target.value;
    updatedInput.valid = checkInputValidity(
      updatedInput.value,
      updatedInput.validation
    );
    updatedOrderForm[id] = updatedInput;

    this.setState({
      orderForm: updatedOrderForm,
      formValid: this.checkFormValidity(updatedOrderForm),
    });
  };

  cancelOrderHandler = () => {
    this.props.history.goBack();
  };

  confirmOrderHandler = () => {
    this.setState({ sendingOrder: true });
    const data = {
      ...this.props.ingredients,
      price: this.props.totalPrice,
    };
    for (let id in this.state.orderForm) {
      data[id] = this.state.orderForm[id].value;
    }
    axios
      .post(this.url + "/order", data)
      .then(() => {
        this.setState({ sendingOrder: false });
        this.props.notify("Burger objednán", "Váš burger byl objednán");
        this.props.history.push("/demos/burger-builder/thankyou");
      })
      .catch(() => {
        this.setState({ sendingOrder: false });
      });
  };

  hideAlertHandler = () => {
    this.setState({ showAlert: false });
  };

  render() {
    if (this.countIngredients() === 0) {
      return <Redirect to="/demos/burger-builder/" />;
    }

    const inputs = Object.entries(this.state.orderForm).map(([name, data]) => {
      return (
        <Input
          key={name}
          name={name}
          config={data.config}
          value={data.value}
          onChange={(event) => this.inputChangedHandler(event, name)}
          valid={data.valid}
        />
      );
    });

    return (
      <>
        <Alert
          variant="warning"
          show={this.state.showAlert}
          dismissible
          onClose={this.hideAlertHandler}
        >
          <p className="mb-0">
            <FormattedMessage id="do-not-enter-real-data" />
          </p>
        </Alert>
        <Row>
          <Col lg="6">
            <Form>
              {inputs}
              <Button variant="secondary" onClick={this.cancelOrderHandler}>
                <FormattedMessage id="back" />
              </Button>{" "}
              <Button
                variant="primary"
                disabled={!this.state.formValid || this.props.sendingOrder}
                onClick={this.confirmOrderHandler}
              >
                {this.props.sendingOrder ? (
                  <FormattedMessage id="ordering" />
                ) : (
                  <FormattedMessage id="order" />
                )}
              </Button>
            </Form>
          </Col>
          <Col lg="6">
            <Burger ingredients={this.props.ingredients} />
          </Col>
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.builder.ingredients,
    totalPrice: state.builder.totalPrice,
    loginEmail: state.auth.email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    notify: (title, message, type) =>
      dispatch(actions.notify(title, message, type)),
  };
};

export default withErrorHandler(
  connect(mapStateToProps, mapDispatchToProps)(Checkout),
  axios
);
