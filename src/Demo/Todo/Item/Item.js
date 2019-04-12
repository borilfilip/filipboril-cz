import React from 'react';
import './Item.css';

const item = (props) => {
    return (
        <div className="Item card">
          <div className="card-body row">
            <div className="col">
              {props.editMode ? <input id={"note-" + props.id} type="text" className="form-control" defaultValue={props.content} /> : props.content}
            </div>
            <div className="col-auto btn-group">
              <button className="btn btn-sm btn-primary" onClick={props.edit}><i className="fas fa-edit" /></button>
              <button className="btn btn-sm btn-danger" onClick={props.delete}><i className="fas fa-trash-alt" /></button>
            </div>
          </div>
        </div>
    );
};

export default item;
