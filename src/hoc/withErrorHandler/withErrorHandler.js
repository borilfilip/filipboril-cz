import React, {Component} from 'react';
import ErrorBox from "../../containers/ErrorBox/ErrorBox";

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        };

        componentDidMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error.message});
                return Promise.reject(error);
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        render() {
            return (
                <>
                    <ErrorBox title={this.state.error} message="Požadavek se nepodařilo vykonat." />
                    <WrappedComponent {...this.props}/>
                </>
            )
        }
    }
};

export default withErrorHandler;
