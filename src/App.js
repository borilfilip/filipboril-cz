import React, { Component } from 'react';
import { Route, HashRouter } from "react-router-dom";
import './App.css';
import Menu from './Menu/Menu';
import Footer from './Footer/Footer'
import Archive from './Archive/Archive'
import Home from "./Home/Home";
import Projects from "./Projects/Projects";

class App extends Component {
  render() {
    return (
      <HashRouter>
          <div className="App">
              <Menu />
              <main className="container">
                  <Route exact path="/" component={Home} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/archive" component={Archive} />
              </main>
              <Footer />
          </div>
      </HashRouter>
    );
  }
}

export default App;
