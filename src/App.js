import React, { Component } from 'react';
import './App.css';
import Menu from './Menu/Menu'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Menu />
          <main className="container">
              <div className="jumbotron">
                  <h1>Můj první react projekt</h1>
                  <p className="lead">A nyní s bootstrapem.</p>
              </div>
          </main>
      </div>
    );
  }
}

export default App;
