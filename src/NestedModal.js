import { Button, Modal } from "react-bootstrap";

export default function NestedModal({ show, handleClose }) {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nested Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Nested Modal Content</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Nested Modal
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }