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
    url = 'https://www.filipboril.cz/api/todo';

    componentDidMount = () => {
        axios.get(this.url)
            .then(response => {
                const notes = response.data.map(item => {
                    return {
                        ...item,
                        editing: false,
                        saving: false
                    }
                });
                this.setState({notes: notes});
            });
    };

    deleteItemHandler = (idx) => {
        const notes = [...this.state.notes];
        notes.splice(idx, 1);
        this.setState({notes: notes});
    };

    getItemIndex = (id) => {
        return this.state.notes.findIndex(p => {
            return p.id === id;
        });
    };

    getItemCopy = (id) => {
        return {...this.state.notes[this.getItemIndex(id)]};
    };

    setItem = (item) => {
        const notes = [...this.state.notes];
        notes[this.getItemIndex(item.id)] = item;

        this.setState({notes: notes});
    };

    editItemHandler = (id) => {
        const item = this.getItemCopy(id);
        item.editing = !item.editing;

        this.setItem(item);
    };

    changeItemHandler = (event, id) => {
        const item = this.getItemCopy(id);
        item.content = event.target.value;

        this.setItem(item);
    };

    saveItemHandler = (event, id) => {
        const item = this.getItemCopy(id);

        axios.put(this.url + '/note/' + item.id, item)
            .then(() => {
                item.editing = false;
                item.saving = false;
                this.setItem(item);
            });

        item.saving = true;
        this.setItem(item);
        event.preventDefault();
    };

    addItemHandler = () => {
        const item = {
            id: this.increment++,
            editing: true
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
                    delete={() => this.deleteItemHandler(idx)}
                    edit={() => this.editItemHandler(item.id)} // TODO idx? also next 2 handlers
                    change={(event) => this.changeItemHandler(event, item.id)}
                    save={(event) => this.saveItemHandler(event, item.id)}
                    content={item.content}
                    editing={item.editing}
                    saving={item.saving}/>
            });

        return (
            <>
                <DemosHeader/>
                <h2>Úkolníček</h2>
                <Button variant="primary" onClick={this.addItemHandler}><i className="fas fa-plus"/> Nový</Button>
                {items}
            </>
        );
    }
}

export default Todo;
