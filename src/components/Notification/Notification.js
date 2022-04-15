import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./Notification.css";

class Notification extends Component {
  state = {
    show: false,
  };

  ref = React.createRef();

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.title !== this.props.title ||
      nextProps.message !== this.props.message
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.title && nextProps.message) {
      this.openNotification();
    }
  }

  openNotification = () => {
    this.setState({ show: true });

    this.timeout = setTimeout(() => {
      this.animateClose();
    }, 3000);
  };

  closeNotification = () => {
    clearTimeout(this.timeout);
    this.animateClose();
  };

  animateClose = () => {
    const ref = this.ref.current;
    if (ref) {
      ref.className = "Notification hide";
      setTimeout(() => {
        this.setState({ show: false });
      }, 800);
    }
  };

  render() {
    const type = this.props.type || "danger";

    return this.state.show ? (
      <div className="NotificationWrapper">
        <Card
          bg={type}
          text="white"
          className="Notification"
          onClick={this.closeNotification}
          ref={this.ref}
        >
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.message}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    ) : null;
  }
}

export default Notification;
