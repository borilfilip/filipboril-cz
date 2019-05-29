import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const deleteModal = (props) => {
    return (
        <Modal show={props.delete !== 0} onHide={props.close} onShow={() => {
            document.getElementById('deleteNoteConfirmButton').focus();
        }}>
            <Modal.Header closeButton>
                <Modal.Title>Opravdu smazat?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Opravdu chcete smazat tuto poznámku?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onClose}>
                    Zrušit
                </Button>
                <Button variant="danger" onClick={props.onDelete} disabled={props.deleting} id="deleteNoteConfirmButton">
                    {props.deleting ? 'Mazání...' : 'Smazat'}
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default deleteModal;
