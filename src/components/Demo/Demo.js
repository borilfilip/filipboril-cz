import React from 'react';
import './Demo.css';
import Todo from "../../containers/Todo/Todo";

const demo = (props) => {
  return (
    <div className="Demo">
      <div className="alert alert-info">
        React se právě učím z videokurzu <a href="https://www.udemy.com/react-the-complete-guide-incl-redux/"
                                            target="_blank"
                                            rel="noopener noreferrer">
        React - The Complete Guide (incl Hooks, React Router, Redux)
      </a> na <a href="https://www.udemy.com"
                 target="_blank"
                 rel="noopener noreferrer">
        Udemy</a>.<br/>
        Ukázku postupně vylepšuji a přidávám další funkcionality.
      </div>
      <h2>Úkolníček</h2>
      <Todo/>
    </div>
  );
};

export default demo;
