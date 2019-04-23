import React, { Component } from 'react';
import './Todo.css';
import Item from "./Item/Item";

class Todo extends Component {
  state = {
    notes: [
      {id: 1, content: "Content 1", editMode: false},
      {id: 2, content: "Content 2", editMode: false},
      {id: 3, content: "Content 3", editMode: false},
    ]
  };

  increment = 4;

  deleteItemHandler = (idx) => {
    const notes = [...this.state.notes];
    notes.splice(idx, 1);
    this.setState({notes: notes});
  };

  editItemHandler = (event, id) => {
    const idx = this.state.notes.findIndex(p => {
      return p.id === id;
    });

    const item = {...this.state.notes[idx]};
    if (item.editMode) item.content = document.getElementById("note-" + id).value; // TODO better way
    item.editMode = !item.editMode;

    const notes = [...this.state.notes];
    notes[idx] = item;

    this.setState({notes: notes});
  };

  addItemHandler = () => {
    const item = {
      id: this.increment++,
      editMode: true
    };

    const notes = [...this.state.notes];
    notes.push(item); // TODO ES6

    this.setState({notes: notes});
  };

  render() {
    let items = (
      <div>
        {this.state.notes.map((item, idx) => {
          return <Item
            key={item.id}
            id={item.id}
            delete={() => this.deleteItemHandler(idx)}
            edit={(event) => this.editItemHandler(event, item.id)}
            content={item.content}
            editMode={item.editMode} />
        })}
      </div>
    );

    return (
        <div className="Todo">
          <button className="btn btn-primary" onClick={this.addItemHandler}><i className="fas fa-plus" /> Nový</button>
          {items}
        </div>
    );
  }
}

export default Todo;
