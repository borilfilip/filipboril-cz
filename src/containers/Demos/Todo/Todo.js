import React, {Component} from 'react';
import axios from 'axios';
import DemosHeader from "../../../components/Demos/DemosHeader/DemosHeader"
import Item from "../../../components/Demos/Todo/Item/Item";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

class Todo extends Component {
    state = {
        notes: [],
        deleting: false,
        adding: false,
        loaded: false
    };

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
                this.setState({notes: notes, loaded: true});
            });
    };

    showHandler = () => {
        this.setState({deleting: true});
    };

    closeHandler = () => {
        this.setState({deleting: false});
    };

    deleteHandler = (idx) => {
        axios.delete(this.url + '/note/' + this.state.notes[idx].id)
            .then(() => {}); // TODO announcement

        const notes = [...this.state.notes];
        notes.splice(idx, 1);
        this.setState({notes: notes, deleting: false});
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

    editHandler = (id) => {
        const item = this.getItemCopy(id);
        item.editing = !item.editing;

        this.setItem(item);
    };

    changeHandler = (event, id) => {
        const item = this.getItemCopy(id);
        item.content = event.target.value;

        this.setItem(item);
    };

    saveHandler = (event, id) => {
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

    addHandler = () => {
        const item = {
            content: '',
            editing: true,
            saving: false
        };

        axios.post(this.url + '/note/', item)
            .then((response) => {
                item.id = response.data.id;

                const notes = [...this.state.notes];
                notes.push(item);

                this.setState({notes: notes, adding: false});
            });

        this.setState({adding: true});
    };

    render() {
        let items = <Spinner animation="border" role="status">
                       <span className="sr-only">Načítání...</span>
                   </Spinner>;
        if (this.state.loaded) items =
            this.state.notes.map((item, idx) => {
                return <Item
                    key={item.id}
                    show={this.showHandler}
                    close={this.closeHandler}
                    delete={() => this.deleteHandler(idx)}
                    deleting={this.state.deleting}
                    edit={() => this.editHandler(item.id)} // TODO idx? also next 2 handlers
                    editing={item.editing}
                    change={(event) => this.changeHandler(event, item.id)}
                    save={(event) => this.saveHandler(event, item.id)}
                    content={item.content}
                    saving={item.saving}/>
            });

        return (
            <>
                <DemosHeader/>
                <h2>Úkolníček</h2>
                <Button variant="primary" onClick={this.addHandler} disabled={this.state.adding}>
                    {this.state.adding ? "Přidávání..." : <><i className="fas fa-plus"/> Nový</>}
                </Button>
                <div className="mt-3">
                    {items}
                </div>
            </>
        );
    }
}

export default Todo;
