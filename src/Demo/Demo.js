import React, { Component } from 'react';
import './Demo.css';
import Todo from "./Todo/Todo";

class Demo extends Component {
  render() {
    return (
        <div className="Demo">
          <h2>Úkolníček</h2>
          <Todo />
        </div>
    );
  }
}

export default Demo;
