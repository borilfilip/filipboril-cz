import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Input from "../../../../components/Demos/BurgerBuilder/Input/Input"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Burger from "../../../../components/Demos/BurgerBuilder/Burger/Burger";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import Alert from "react-bootstrap/Alert";
import axios from 'axios';
import withErrorHandler from "../../../../hoc/withErrorHandler/withErrorHandler";

class Checkout extends Component {

    url = 'https://www.filipboril.cz/api/burger';

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
            delivery_method: {
                config: {
                    type: 'select',
                    label: 'Způsob doručení',
                    options: [
                        {value: 'fast', displayValue: 'Rychlá'},
                        {value: 'cheap', displayValue: 'Levná'}
                    ]
                },
                validation: {},
                valid: true,
                value: 'fast'
            }
        },
        formValid: false,
        showAlert: true,
        sendingOrder: false
    };

    componentDidMount() {
        if (this.props.loginEmail) {
            this.setState({
                ...this.state,
                orderForm: {
                    ...this.state.orderForm,
                    email: {
                        ...this.state.orderForm.email,
                        value: this.props.loginEmail
                    }
                }
            })
        }
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
        this.setState({sendingOrder: true});
        const data = {
            ...this.props.ingredients,
            price: this.props.totalPrice
        };
        for (let id in this.state.orderForm) {
            data[id] = this.state.orderForm[id].value;
        }
        axios.post(this.url + '/order', data)
            .then(response => {
                this.setState({sendingOrder: false});
                this.props.history.push('/demos/burger-builder/thankyou');
            })
            .catch(error => {
                this.setState({sendingOrder: false});
            });
    };

    hideAlertHandler = () => {
        this.setState({showAlert: false});
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
            <>
                <Alert variant="warning" show={this.state.showAlert} dismissible onClose={this.hideAlertHandler}>
                    <p className="mb-0">
                        Nezadávejte, prosím, skutečná osobní data.
                    </p>
                </Alert>
                <Row>
                    <Col lg="6">
                        <Form>
                            {inputs}
                            <Button variant="secondary" onClick={this.cancelOrderHandler}>Zpět</Button>{' '}
                            <Button variant="primary" disabled={!this.state.formValid || this.props.sendingOrder}
                                    onClick={this.confirmOrderHandler}>
                                {this.props.sendingOrder ? "Objednávám..." : "Objednat"}
                            </Button>
                        </Form>
                    </Col>
                    <Col lg="6">
                        <Burger ingredients={this.props.ingredients}/>
                    </Col>
                </Row>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.builder.ingredients,
        totalPrice: state.builder.totalPrice,
        loginEmail: state.auth.email
    };
};

export default withErrorHandler(connect(mapStateToProps)(Checkout), axios);
