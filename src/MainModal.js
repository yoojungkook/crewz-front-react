import { Button, Modal } from "react-bootstrap";
import NestedModal from "./NestedModal";
import { useState } from "react";

export default function MainModal({ show, handleClose }) {
    const [nestedShow, setNestedShow] = useState(false);

    const handleNestedShow = () => {
      setNestedShow(true);
      handleClose(); // MainModal이 열릴 때 NestedModal이 열리면 MainModal을 닫도록 추가
    };
    const handleNestedClose = () => setNestedShow(false);
    
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Main Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Main Modal Content</p>
            <Button variant="primary" onClick={handleNestedShow}>
              Open Nested Modal
            </Button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
  
        <NestedModal show={nestedShow} handleClose={handleNestedClose} />
      </>
    );
  }