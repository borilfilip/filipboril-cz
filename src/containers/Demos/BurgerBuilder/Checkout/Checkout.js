import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Input from "../../../../components/Demos/BurgerBuilder/Input/Input"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Burger from "../../../../components/Demos/BurgerBuilder/Burger";
import {connect} from "react-redux";
import {Redirect} from "react-router";

class Checkout extends Component {
    state = {
        orderForm: {
            email: {
                config: {
                    type: 'email',
                    label: 'Váš email',
                    hint: 'Na tento email Vám zašleme rekapitulaci objednávky.'
                },
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: undefined,
                value: ''
            },
            name: {
                config: {
                    type: 'text',
                    label: 'Jméno a příjmení'
                },
                validation: {
                    required: true
                },
                valid: undefined,
                value: ''
            },
            street: {
                config: {
                    type: 'text',
                    label: 'Ulice, číslo popisné a orientační'
                },
                validation: {
                    required: true
                },
                valid: undefined,
                value: ''
            },
            city: {
                config: {
                    type: 'text',
                    label: 'Město'
                },
                validation: {
                    required: true
                },
                valid: undefined,
                value: ''
            },
            zip: {
                config: {
                    type: 'number',
                    label: 'PSČ'
                },
                validation: {
                    required: true,
                    isNumeric: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: undefined,
                value: ''
            },
            country: {
                config: {
                    type: 'text',
                    label: 'Země'
                },
                validation: {
                    required: true
                },
                valid: undefined,
                value: ''
            },
            deliveryMethod: {
                config: {
                    type: 'select',
                    label: 'Způsob doručení',
                    options: [
                        {value: 'fastest', displayValue: 'Rychlá'},
                        {value: 'cheapest', displayValue: 'Levná'}
                    ]
                },
                validation: {},
                valid: true,
                value: ''
            }
        },
        formValid: false
    };

    countIngredients = () => {
        return Object.values(this.props.ingredients).reduce((acc, val) => acc + val);
    };

    checkInputValidity = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
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
            ...this.state.orderForm
        };
        const updatedInput = {
            ...updatedOrderForm[id]
        };

        updatedInput.value = event.target.value;
        updatedInput.valid = this.checkInputValidity(updatedInput.value, updatedInput.validation);
        updatedOrderForm[id] = updatedInput;

        this.setState({orderForm: updatedOrderForm, formValid: this.checkFormValidity(updatedOrderForm)});
    };

    cancelOrderHandler = () => {
        this.props.history.goBack();
    };

    confirmOrderHandler = () => {
        alert('Zatím není implementováno :-(');
    };

    render() {
        if (this.countIngredients() === 0) {
            return (<Redirect to="/demos/burger-builder/"/>);
        }

        const inputs = Object.entries(this.state.orderForm).map(([name, data]) => {
            return (
                <Input key={name} name={name} config={data.config} value={data.value}
                       onChange={(event) => this.inputChangedHandler(event, name)} valid={data.valid}/>
            )
        });

        return (
            <Row>
                <Col lg="6">
                    <Form>
                        {inputs}
                        <Button variant="secondary" onClick={this.cancelOrderHandler}>Zpět</Button>{' '}
                        <Button variant="primary" disabled={!this.state.formValid}
                                onClick={this.confirmOrderHandler}>Objednat</Button>
                    </Form>
                </Col>
                <Col lg="6">
                    <Burger ingredients={this.props.ingredients}/>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    };
};

export default connect(mapStateToProps)(Checkout);
