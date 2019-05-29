import React, {Component} from 'react';
import './withErrorHandler.css';
import Card from "react-bootstrap/Card";

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

        componentDidUpdate() {
            this.timeout = setTimeout(() => {
                this.setState({error: null});
                clearTimeout(this.timeout);
            }, 5000);
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        closeErrorHandler = () => {
            this.setState({error: null});
        };

        render() {
            return (
                <>
                    {this.state.error ?
                        <div className="withErrorHandlerWrapper" onClick={this.closeErrorHandler}>
                            <Card bg="danger" text="white" className="withErrorHandler">
                                <Card.Body>
                                    <Card.Title>{this.state.error}</Card.Title>
                                    <Card.Text>
                                        Požadavek se nepodařilo vykonat.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        : null}
                    <WrappedComponent {...this.props}/>
                </>
            )
        }
    }
};

export default withErrorHandler;
