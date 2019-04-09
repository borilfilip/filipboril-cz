import React from 'react';
import './Project.css';

const Project = (props) => {
  return (
      <div className="Project card mb-3">
          <div className="row no-gutters">
              <div className="col-md-4">
                  <img src={props.img} className="card-img" alt={props.name} />
              </div>
              <div className="col-md-8">
                  <div className="card-body">
                      <h5 className="card-title">{props.name}</h5>
                      <p className="card-text">{props.children}</p>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Project;
