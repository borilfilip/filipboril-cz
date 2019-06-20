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
                value: ''
            },
            name: {
                config: {
                    type: 'text',
                    label: 'Jméno a příjmení'
                },
                value: ''
            },
            street: {
                config: {
                    type: 'text',
                    label: 'Ulice, číslo popisné a orientační'
                },
                value: ''
            },
            city: {
                config: {
                    type: 'text',
                    label: 'Město'
                },
                value: ''
            },
            zip: {
                config: {
                    type: 'number',
                    label: 'PSČ'
                },
                value: ''
            },
            country: {
                config: {
                    type: 'text',
                    label: 'Země'
                },
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
                value: ''
            }
        }
    };

    countIngredients = () => {
        return Object.values(this.props.ingredients).reduce((acc, val) => acc + val);
    };

    inputChangedHandler = (event, id) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedInput = {
            ...updatedOrderForm[id]
        };

        updatedInput.value = event.target.value;
        updatedOrderForm[id] = updatedInput;

        this.setState({orderForm: updatedOrderForm});
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
                       onChange={(event) => this.inputChangedHandler(event, name)}/>
            )
        });

        return (
            <Row>
                <Col lg="6">
                    <Form>
                        {inputs}
                        <Button variant="secondary" onClick={this.cancelOrderHandler}>Zpět</Button>{' '}
                        <Button variant="primary" onClick={this.confirmOrderHandler}>Objednat</Button>
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
