import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Archive.css';

class Archive extends Component {
  render() {
    return (
        <div className="Archive">
          <NavLink to="/projects" className="btn btn-primary btn-sm">← Zpět</NavLink>
        </div>
    );
  }
}

export default Archive;
