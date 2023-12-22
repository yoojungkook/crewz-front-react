import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../App.css";

export default function ChatModal() {
  
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button style={{width: '90%', height : '4%'}} onClick={() => setLgShow(true)}>무엇이든 물어보살</Button>
      
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body><iframe src='https://chatdoge-test-6eg.pages.dev/' title="External Content" width="100%" height="700px"></iframe></Modal.Body>
      </Modal>
    </>
  );
}

