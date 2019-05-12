import React, {Component} from 'react';
import axios from 'axios';
import DemosHeader from "../../../components/Demos/DemosHeader/DemosHeader"
import Item from "../../../components/Demos/Todo/Item/Item";
import Button from "react-bootstrap/Button";

class Todo extends Component {
  state = {
    notes: []
  };

  increment = 9999; // TODO use DB increment and remove

  componentDidMount () {
    axios.get('http://filipboril.cz/api/')
      .then( response => {
        const notes = response.data.map(item => {
          return {
            ...item,
            editMode: false
          }
        });
        this.setState({notes: notes});
      });
  }

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
    let items =
      this.state.notes.map((item, idx) => {
        return <Item
          key={item.id}
          id={item.id}
          delete={() => this.deleteItemHandler(idx)}
          edit={(event) => this.editItemHandler(event, item.id)}
          content={item.content}
          editMode={item.editMode}/>
      });

    return (
      <>
        <DemosHeader />
        <h2>Úkolníček</h2>
        <Button variant="primary" onClick={this.addItemHandler}><i className="fas fa-plus"/> Nový</Button>
        {items}
      </>
    );
  }
}

export default Todo;
