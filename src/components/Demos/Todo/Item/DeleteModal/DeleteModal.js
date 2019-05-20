import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const deleteModal = (props) => {
    return (
        <Modal show={props.deleting} onHide={props.close}>
            <Modal.Header closeButton>
                <Modal.Title>Opravdu smazat?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Opravdu chcete smazat tuto poznámku?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.close}>
                    Zrušit
                </Button>
                <Button variant="danger" onClick={props.delete}>
                    Smazat
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default deleteModal;
