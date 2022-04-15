import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";
import * as actions from "../../../../store/burgerBuilder/actions";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class DemosHeader extends Component {
  render() {
    const link = (
      <a
        href="https://github.com/borilfilip/filipboril-cz"
        target="_blank"
        rel="noreferrer noopener"
      >
        GitHub
      </a>
    );

    return (
      <Alert
        variant="info"
        show={this.props.show}
        dismissible
        onClose={this.props.hide}
      >
        <p className="mb-0">
          <FormattedMessage id="demos-github" values={{ github: link }} />
        </p>
      </Alert>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.demosHeader.showDemoAlert,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hide: () => dispatch(actions.closeDemoAlert()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemosHeader);
