import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../App.css";

export default function ChatModal() {
  
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button onClick={() => setLgShow(true)}>챗 도지</Button>
      
      <Modal
        
        show={lgShow}
        onHide={() => setLgShow(false)}
        
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            챗도지 상담사
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe src='https://chatdoge-test-6eg.pages.dev/' title="External Content" width="100%" height="500px"></iframe></Modal.Body>
      </Modal>
    </>
  );
}

