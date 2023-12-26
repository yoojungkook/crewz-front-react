import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function BoardAdd() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="danger" onClick={handleShow} style={{margin:'20px', fontSize:'100%',float : 'right'}}>글작성</Button>
            <br/><hr/>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>게시글 추가하기</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span className='fw-bold'>제목</span><br/>
                    <input style={{height : '50px', width: '100%'}} type="text" placeholder="게시글 제목 입력"/><br/><br/>
                    
                    <span className='fw-bold'>사진을 선택해주세요</span><br/><br/>
                    <input type="file"/><br/><br/>

                    <span className='fw-bold'>내용</span><br/>
                    <textarea style={{height : '50px', width: '100%'}} placeholder="게시글 내용을 입력해주세요"/><br/><br/>

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