import React from 'react';
import { NavLink } from "react-router-dom";
import './Menu.css';

const menu = (props) => {
  return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container">
              <NavLink exact to="/" className="navbar-brand">Filip Bořil</NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                      aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                          <NavLink exact to="/" className="nav-link">O mně</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink to="/projects" className="nav-link">Projekty</NavLink>
                      </li>
                    <li className="nav-item">
                      <NavLink to="/demo" className="nav-link">Ukázka</NavLink>
                    </li>
                  </ul>
              </div>
          </div>
      </nav>
  );
};

export default menu;
