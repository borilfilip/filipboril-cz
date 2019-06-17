import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Input from "../../../../components/Demos/BurgerBuilder/Input/Input"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
            }
        }
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

    render() {

        const inputs = Object.entries(this.state.orderForm).map(([name, data]) => {
            const {type, label, hint} = data.config;
            const value = data.value;
            return (
                <Input key={name} type={type} label={label} hint={hint} value={value}
                       onChange={(event) => this.inputChangedHandler(event, name)}/>
            )
        });

        return (
            <Row>
                <Col lg="6">
                    <Form>
                        {inputs}
                        <Button variant="danger">Zrušit</Button> <Button variant="primary">Objednat</Button>
                    </Form>
                </Col>
                <Col lg="6">>Náhled burgeru&lt;</Col>
            </Row>
        )
    }
}

export default Checkout;
