import React, { Component } from "react";
import Notification from "../../components/Notification/Notification";
import { FormattedMessage } from "react-intl";

const withErrorHandler = (WrappedComponent, axios) => {
  // TODO use notify
  return class extends Component {
    state = {
      error: null,
    };

    componentDidMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error.message });
          return Promise.reject(error);
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    render() {
      return (
        <>
          <Notification
            title={<FormattedMessage id="error-occurred" />}
            message={this.state.error}
          />
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default withErrorHandler;
