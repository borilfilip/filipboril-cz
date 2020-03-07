import React, {Component} from 'react';
import {NotificationContext} from "../../components/App";

const withNotification = (WrappedComponent) => {
    return class extends Component {
        render() {
            return (
                <NotificationContext.Consumer>
                    {context => (
                        <WrappedComponent {...this.props} notify={context.notify} />
                    )}
                </NotificationContext.Consumer>
            )

        }
    }
};

export default withNotification;
