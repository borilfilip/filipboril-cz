import React, {Component} from 'react';
import axios from 'axios';
import DemosHeader from "../../../components/Demos/DemosHeader/DemosHeader"
import Item from "../../../components/Demos/Todo/Item/Item";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import DeleteModal from "../../../components/Demos/Todo/Item/DeleteModal/DeleteModal";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import Alert from "react-bootstrap/Alert";

class Todo extends Component {
    state = {
        notes: [],
        delete: 0,
        deleting: false,
        adding: false,
        loaded: false,
        error: false
    };

    url = 'https://www.filipboril.cz/api/todo';
    lastInsertRef = React.createRef();

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
            })
            .catch(() => {
                this.setState({error: true});
            });
    };

    deleteModalShowHandler = (idx) => {
        this.setState({delete: idx});
    };

    closeDeleteModalHandler = () => {
        this.setState({delete: 0});
    };

    deleteHandler = () => {
        axios.delete(this.url + '/note/' + this.state.notes[this.state.delete].id)
            .then(() => {
                const notes = [...this.state.notes];
                notes.splice(this.state.delete, 1);
                this.setState({notes: notes, delete: 0, deleting: false});
            })
            .catch(() => {
                this.setState({delete: 0, deleting: false})
            });
        this.setState({deleting: true});
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
            })
            .finally(() => {
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
                this.lastInsertRef.current.focus();
            })
            .catch(() => {
                this.setState({adding: false})
            });

        this.setState({adding: true});
    };

    render() {
        let items = (
            <Spinner animation="border" role="status">
                <span className="sr-only">Načítání...</span>
            </Spinner>
        );

        if (this.state.loaded) items =
            this.state.notes.map((item, idx) => {
                return <Item
                    key={item.id}
                    delete={() => this.deleteModalShowHandler(idx)}
                    edit={() => this.editHandler(item.id)} // TODO focus input
                    editing={item.editing}
                    change={(event) => this.changeHandler(event, item.id)}
                    save={(event) => this.saveHandler(event, item.id)}
                    saving={item.saving}
                    content={item.content}
                    inputRef={this.lastInsertRef}/>
            });

        let view = (
            <>
                <Button variant="primary" onClick={this.addHandler} disabled={this.state.adding}>
                    {this.state.adding ? "Přidávání..." : <><i className="fas fa-plus"/> Nový</>}
                </Button>
                <div className="mt-3">
                    {items}
                </div>
                <DeleteModal delete={this.state.delete} deleting={this.state.deleting}
                             onClose={this.closeDeleteModalHandler} onDelete={this.deleteHandler}/>
            </>
        );

        if (this.state.error) view = <Alert variant="danger">Poznámky se nepodařilo načíst.</Alert>;

        return (
            <>
                <DemosHeader/>
                <h2>Úkolníček</h2>
                {view}
            </>
        );
    }
}

export default withErrorHandler(Todo, axios);
