import React, {Component} from 'react';
import Alert from 'react-bootstrap/Alert'

class DemosHeader extends Component {
    state = {
        show: true
    };

    hideHandler = () => {
        this.setState({show: false});
    };

    render() {
        return (
            <Alert variant="info" show={this.state.show} dismissible onClose={this.hideHandler}>
                <p className="mb-0">
                    Ukázky postupně vylepšuji a přidávám další funkcionality. Zdrojový kód naleznete na <a
                    href="https://github.com/borilfilip/filipboril-cz" target="_blank"
                    rel="noreferrer noopener">GitHubu</a>.
                </p>
            </Alert>
        );
    }
}

export default DemosHeader;