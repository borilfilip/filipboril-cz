import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const deleteModal = (props) => {
    return (
        <Modal show={props.deleting !== 0} onHide={props.close} onShow={() => {
            document.getElementById('deleteNoteConfirmButton').focus();
        }}>
            <Modal.Header closeButton>
                <Modal.Title>Opravdu smazat?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Opravdu chcete smazat tuto poznámku?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.close}>
                    Zrušit
                </Button>
                <Button variant="danger" onClick={props.delete} id="deleteNoteConfirmButton">
                    Smazat
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default deleteModal;
