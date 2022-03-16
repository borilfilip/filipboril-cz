import React, {Component} from 'react';
import Input from "../Input/Input";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import withErrorHandler from "../../../../hoc/withErrorHandler/withErrorHandler";
import Notification from "../../../Notification/Notification";
import {connect} from "react-redux";
import * as actions from "../../../../store/burgerBuilder/actions";
import {checkInputValidity} from "../../../../shared/utility";
import {FormattedMessage} from "react-intl";
import './Sign.css';

class Sign extends Component {
  url = 'https://www.filipboril.cz/api/user';

  state = {
    formData: {
      email: {
        config: {
          type: 'email',
          labelId: "email"
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
          labelId: "password"
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
          labelId: "password-again"
        },
        validation: {
          required: true,
          minLength: 6,
          equal: this.state?.formData.password.value
        },
        valid: undefined,
        value: ''
      }
    },
    formValid: false
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
    updatedInput.valid = checkInputValidity(updatedInput.value, updatedInput.validation);
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
      return (
        <Redirect to="/demos/burger-builder"/>
      );
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

    const additionalLink = (
      <div className="mt-3">
        {
          register
            ? <Link to="/demos/burger-builder/sign/in"><FormattedMessage id="already-registered"/></Link>
            : (
              <>
                <i className="fas fa-info-circle"/> <FormattedMessage id="not-registered"/>{' '}
                <Link to="/demos/burger-builder/sign/up"><FormattedMessage id="do-register"/></Link>
              </>
            )
        }
      </div>
    );

    const {error, sending} = this.props;

    return (
      <>
        <Notification title={error} message={<FormattedMessage id="login-failed"/>}/>
        <h2>{register ? <FormattedMessage id="registration"/> : <FormattedMessage id="login"/>}</h2>
        <Col md="6">
          <form onSubmit={this.submitHandler}>
            {form}
            <div className="additional-link">
              <Button type="submit" variant="primary" disabled={!this.state.formValid || sending}>
                {sending ? <FormattedMessage id="wait"/> : (register ? <FormattedMessage id="register"/> :
                  <FormattedMessage id="to-login"/>)}
              </Button>
              {additionalLink}
            </div>
          </form>
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
