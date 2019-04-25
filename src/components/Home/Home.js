import React from 'react';
import './Home.css';
import CV from './CV/CV';
import Intro from './Intro/Intro';
import Social from './Social/Social';

const home = (props) => {
  return (
      <div className="Home">
          <Intro />
          <Social />
          <CV />
      </div>
  );
};

export default home;
