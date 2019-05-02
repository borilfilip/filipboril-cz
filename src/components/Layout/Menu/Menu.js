import React from 'react';
import {NavLink, matchPath} from "react-router-dom";

const menu = (props) => {
  let demosActive = matchPath(window.location.hash.substr(1), {path: "/demos"}) !== null; // TODO does changes

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container">
        <NavLink exact to="/" className="navbar-brand">Filip Bořil</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">O mně</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/projects" className="nav-link">Projekty</NavLink>
            </li>
            <li className={"nav-item dropdown" + (demosActive ? " active" : "")}>
              <a className="nav-link dropdown-toggle" href="#" id="demos" role="button"
                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Ukázky
              </a>
              <div className="dropdown-menu" aria-labelledby="demos">
                <NavLink to="/demos/todo" className="dropdown-item">Úkolníček</NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default menu;
