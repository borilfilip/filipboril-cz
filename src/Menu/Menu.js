import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Bc. Filip Bořil</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">O mně <span className="sr-only">(aktuální)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Projekty</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
}

export default Menu;
