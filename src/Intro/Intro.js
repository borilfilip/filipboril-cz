import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {
  render() {
    return (
        <div className="jumbotron">
            <h1>{this.props.headline}</h1>
            <p className="lead">{this.props.children}</p>
        </div>
    );
  }
}

export default Intro;