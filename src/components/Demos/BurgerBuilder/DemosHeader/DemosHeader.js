import React, {Component} from 'react';
import Alert from 'react-bootstrap/Alert'
import * as actions from "../../../../store/burgerBuilder/actions";
import {connect} from "react-redux";

class DemosHeader extends Component {

    render() {
        return (
            <Alert variant="info" show={this.props.show} dismissible onClose={this.props.hide}>
                <p className="mb-0">
                    Ukázky postupně vylepšuji a přidávám další funkcionality. Zdrojový kód naleznete na <a
                    href="https://github.com/borilfilip/filipboril-cz" target="_blank"
                    rel="noreferrer noopener">GitHubu</a>.
                </p>
            </Alert>
        );
    }
}

const mapStateToProps = state => {
    return {
        show: state.demosHeader.showDemoAlert
    };
};

const mapDispatchToProps = dispatch => {
    return {
        hide: () => dispatch(actions.closeDemoAlert())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DemosHeader);