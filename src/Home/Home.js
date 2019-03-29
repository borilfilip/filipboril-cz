import React, { Component } from 'react';
import './Home.css';
import CV from './CV/CV';
import Intro from './Intro/Intro';
import Social from './Social/Social';

class Home extends Component {
  render() {
    return (
        <div className="Home">
            <Intro />
            <Social />
            <CV />
        </div>
    );
  }
}

export default Home;
