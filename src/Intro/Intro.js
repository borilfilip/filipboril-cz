import React from 'react';
import './Intro.css';

const intro = (props) => {
  return (
      <div className="jumbotron">
          <h1>{props.headline}</h1>
          <p className="lead">{props.children}</p>
      </div>
  );
};

export default intro;
