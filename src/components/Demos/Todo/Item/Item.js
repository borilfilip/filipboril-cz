import React from 'react';
import './Item.css';
import EditItem from './EditItem/EditItem'
import Card from 'react-bootstrap/Card'
import DisplayItem from "./DisplayItem/DisplayItem";
import DeleteModal from "./DeleteModal/DeleteModal";

const item = (props) => {
    return (
        <>
            <Card className="Item">
                <Card.Body>
                    {props.editing
                        ? <EditItem content={props.content} change={props.change} save={props.save}/>
                        : <DisplayItem content={props.content} delete={props.show} edit={props.edit}/>
                    }
                </Card.Body>
            </Card>
            <DeleteModal deleting={props.deleting} close={props.close} delete={props.delete} />
        </>
    );
};

export default item;
