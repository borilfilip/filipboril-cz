import React from 'react';
import './Item.css';
import {Card, Row, Col, Button, Form} from "react-bootstrap";

const item = (props) => {
  const {content, onChange, isSaving, inputRef, onDelete, onEdit, isEditing} = props;
  const onSave = (event) => {
    inputRef.current.blur();
    props.onSave(event);
  };
  const button = isEditing ?
    (
      <Button type="submit" variant="primary" size="sm" disabled={isSaving}>
        {isSaving ? "Ukládání..." : <i className="fas fa-edit"/>}
      </Button>
    ) :
    (
      <Button variant="danger" size="sm" onClick={onDelete}><i className="fas fa-trash-alt"/></Button>
    );

  return (
    <Card className="Item" border={isEditing ? 'primary' : null}>
      <Card.Body className="py-2">
        <Form onSubmit={!isSaving ? onSave : () => {}}>
          <Row className="Item-row">
            <Col>
              <Form.Control type="text" name="note" className="Item-input" value={content}
                            onFocus={!isEditing ? onEdit : () => {}} onBlur={isEditing ? onSave : () => {}}
                            onChange={onChange} ref={inputRef}/>
            </Col>
            <Col xs="auto">
              {button}
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default item;
