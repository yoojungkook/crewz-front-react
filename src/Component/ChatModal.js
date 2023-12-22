import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../App.css";

export default function ChatModal() {
  
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <img src="/img/chatbot.png" style={{width:'16%',marginRight:'9%',height : '4%',cursor : 'pointer'}} onClick={() => setLgShow(true)}/>
      
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

