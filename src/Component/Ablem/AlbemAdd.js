import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AlbemAdd() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div
                style={{ cursor: "pointer", backgroundColor: 'white', width: '31%', border: '5px dashed black', borderRadius: ".5rem", fontSize: "1500%", padding: '2% 9.5%', margin: ' 5px 5px ' }}
                onClick={handleShow}
            >

                <Col>
                    +
                </Col>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>사진첩 사진 추가</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span className='fw-bold'>사진 타이틀</span><br/>
                    <input style={{height : '50px', width: '100%'}} type="text" placeholder="ex) 12월 25일 서울 여행"/><br/><br/>
                    
                    <span className='fw-bold'>사진을 선택해주세요</span><br/><br/>
                    <input type="file"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        닫기
                    </Button>
                    <Button variant="primary">추가</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}