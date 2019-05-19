import React from 'react';
import './Item.css';
import EditItemForm from './editItemForm/editItemForm'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Spinner from "react-bootstrap/Spinner";

const item = (props) => {
    return (
        <Card className="Item">
            <Card.Body>
                <Row>
                    <Col>
                        {
                            props.editing
                                ? <EditItemForm type="text" value={props.content} change={props.change}
                                                submit={props.save}/>
                                : props.saving
                                ? <Spinner animation="border" role="status">
                                    <span className="sr-only">Ukládání...</span>
                                </Spinner>
                                : props.content
                        }
                    </Col>
                    <Col xs="auto">
                        <ButtonGroup>
                            <Button variant="primary" size="sm" onClick={props.edit}><i
                                className="fas fa-edit"/></Button>
                            <Button variant="danger" size="sm" onClick={props.delete}><i className="fas fa-trash-alt"/></Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default item;
