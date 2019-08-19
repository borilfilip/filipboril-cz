import React, {Component} from 'react';
import Input from "../../../../components/Demos/BurgerBuilder/Input/Input";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import withErrorHandler from "../../../../hoc/withErrorHandler/withErrorHandler";
import ErrorBox from "../../../ErrorBox/ErrorBox";
import {connect} from "react-redux";
import * as actions from "../../../../store/burgerBuilder/actions";

class Sign extends Component {

    url = 'https://www.filipboril.cz/api/user';

    state = {
        formData: {
            email: {
                config: {
                    type: 'email',
                    label: 'Email'
                },
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: undefined,
                value: ''
            },
            password: {
                config: {
                    type: 'password',
                    label: 'Heslo'
                },
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: undefined,
                value: ''
            },
            passwordAgain: {
                config: {
                    type: 'password',
                    label: 'Heslo znovu'
                },
                validation: {
                    required: true,
                    minLength: 6,
                    equal: 'password'
                },
                valid: undefined,
                value: ''
            }
        },
        formValid: false
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

        if (rules.equal) {
            isValid = value === this.state.formData[rules.equal].value && isValid
        }

        return isValid;
    };

    isRegistering = () => {
        return this.props.location.pathname === '/demos/burger-builder/sign/up';
    };

    checkFormValidity = (form) => {
        let isValid = true;
        for (let inputId in form) {
            isValid = (form[inputId].valid || (!this.isRegistering() && inputId === 'passwordAgain')) && isValid;
        }
        return isValid;
    };

    inputChangedHandler = (event, id) => {
        const updatedFormData = {
            ...this.state.formData
        };
        const updatedInput = {
            ...updatedFormData[id]
        };

        updatedInput.value = event.target.value;
        updatedInput.valid = this.checkInputValidity(updatedInput.value, updatedInput.validation);
        updatedFormData[id] = updatedInput;

        this.setState({formData: updatedFormData, formValid: this.checkFormValidity(updatedFormData)});
    };

    submitHandler = (event) => {
        const {formData} = this.state;

        if (this.isRegistering()) {
            this.props.register(formData.email.value, formData.password.value);
        } else {
            this.props.login(formData.email.value, formData.password.value);
        }

        event.preventDefault();
    };

    render() {
        if (this.props.email) {
            return <Redirect to="/demos/burger-builder"/>;
        }

        const register = this.isRegistering();

        let inputs = Object.entries(this.state.formData);
        if (!register) {
            inputs.splice(2, 1);
        }

        const form = inputs.map(([name, data]) => {
            return (
                <Input key={name} name={name} config={data.config} value={data.value}
                       onChange={(event) => this.inputChangedHandler(event, name)} valid={data.valid}/>
            )
        });

        const {error, sending} = this.props;

        return (
            <>
                <ErrorBox title={error} message="Přihlášení se nezdařilo." />
                <h2>{register ? 'Registrace' : 'Přihlášení'}</h2>
                <Col md="6">
                    <form onSubmit={this.submitHandler}>
                        {form}
                        <Button type="submit" variant="primary" disabled={!this.state.formValid || sending}>
                            {sending ? 'Čekejte...' : (register ? 'Registrovat' : 'Přihlásit')}
                        </Button>
                    </form>
                    <div className="mt-3">
                        {
                            register
                                ? <Link to="/demos/burger-builder/sign/in">Již mám účet</Link>
                                : <><i className="fas fa-info-circle" /> Nemáte účet? <Link to="/demos/burger-builder/sign/up">Zaregistrujte se</Link></>
                        }
                    </div>
                </Col>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        sending: state.auth.sending,
        error: state.auth.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(actions.login(email, password)),
        register: (email, password) => dispatch(actions.register(email, password))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Sign, axios));
