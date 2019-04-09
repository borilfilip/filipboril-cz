import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Menu.css';

class Menu extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container">
                <NavLink exact to="/" className="navbar-brand">Bc. Filip Bořil</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link">O mně</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" className="nav-link">Projekty</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
}

export default Menu;
