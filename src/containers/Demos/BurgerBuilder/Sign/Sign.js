import React, {Component} from 'react';
import Input from "../../../../components/Demos/BurgerBuilder/Input/Input";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
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
        formValid: false,
        sending: false,
        error: null
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
        this.setState({sending: true});
        const data = {};
        for (let id in this.state.formData) {
            data[id] = this.state.formData[id].value;
        }

        if (this.isRegistering()) {
            axios.post(this.url + '/register', data) // TODO move to redux
                .then(response => {
                    this.setState({sending: false});
                    if (response.data.status === 'ok') {
                        this.props.login(this.state.formData.email.value, response.data.token);
                        this.props.history.push('/demos/burger-builder');
                    } else {
                        this.setState({error: response.data.message});
                    }
                })
                .catch(() => {
                    this.setState({sending: false});
                });
        } else {
            axios.post(this.url + '/login', data) // TODO move to redux
                .then(response => {
                    this.setState({sending: false});
                    if (response.data.status === 'ok') {
                        this.props.login(this.state.formData.email.value, response.data.token);
                        this.props.history.push('/demos/burger-builder');
                    } else {
                        this.setState({error: response.data.message});
                    }
                })
                .catch(() => {
                    this.setState({sending: false});
                });
        }

        event.preventDefault();
    };

    render() {
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

        const {error} = this.state;

        return (
            <>
                <ErrorBox title={error} message="Přihlášení se nezdařilo." />
                <h2>{register ? 'Registrace' : 'Přihlášení'}</h2>
                <Col md="6">
                    <form onSubmit={this.submitHandler}>
                        {form}
                        <Button type="submit" variant="primary" disabled={!this.state.formValid}>
                            {register ? 'Registrovat' : 'Přihlásit'}
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

const mapDispatchToProps = dispatch => {
    return {
        login: (email, token) => dispatch(actions.login(email, token))
    }
};

export default connect(null, mapDispatchToProps)(withErrorHandler(Sign, axios));
