import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import "./ErrorBox.css";

class ErrorBox extends Component {

    state = {
        show: false
    };

    errorBoxRef = React.createRef();

    componentWillReceiveProps(nextProps) {
        if (nextProps.title) {
            this.setState({show: true});

            this.timeout1 = setTimeout(() => {
                this.animateClose();
            }, 3000);
        }
    }

    closeErrorHandler = () => {
        clearTimeout(this.timeout1);
        this.animateClose();
    };

    animateClose = () => {
        const ref = this.errorBoxRef.current;
        if (ref) {
            ref.className = "ErrorBox hide";
            setTimeout(() => {
                this.setState({show: false});
            }, 800);
        }
    };

    render() {
        return (
            this.state.show
                ? <div className="ErrorBoxWrapper">
                    <Card bg="danger" text="white" className="ErrorBox" onClick={this.closeErrorHandler}
                          ref={this.errorBoxRef}>
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                                {this.props.message}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                : null
        );
    }
}

export default ErrorBox;
