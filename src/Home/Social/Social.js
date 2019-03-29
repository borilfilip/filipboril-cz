import React from 'react';
import './Social.css';

const social = (props) => {
  return (
      <div className="social">
          <a href="https://www.facebook.com/borilfilip" target="_blank"><i className="fab fa-facebook" /></a>&nbsp;
          <a href="https://www.linkedin.com/in/filip-bo%C5%99il-4aa110117/" target="_blank"><i className="fab fa-linkedin" /></a>&nbsp;
          <a href="mailto:borilfilip&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"><i className="fas fa-envelope-square" /></a>
      </div>
  );
};

export default social;
