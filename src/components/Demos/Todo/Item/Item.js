import React from 'react';
import './Item.css';
import EditItem from './EditItem/EditItem'
import Card from 'react-bootstrap/Card'
import DisplayItem from "./DisplayItem/DisplayItem";

const item = (props) => {
    return (
        <Card className="Item">
            <Card.Body>
                {props.editing
                    ? <EditItem content={props.content} change={props.change} save={props.save}
                                saving={props.saving} inputRef={props.inputRef}/>
                    : <DisplayItem content={props.content} delete={props.delete} edit={props.edit}/>
                }
            </Card.Body>
        </Card>
    );
};

export default item;
