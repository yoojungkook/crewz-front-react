import React, { useState } from 'react';
import { Form, InputGroup, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './somoimcss.css';
export default function SomoimAdd() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button id="Add_btn" variant="warning" onClick={handleShow}>
                ＋
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>소모임 작성</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span className="fw-bold">썸네일 선택</span><br />
                    <input type="file" name="f" id="inputGroupFile01" />
                    <br /><br/>

                    <span className="fw-bold">소모임이름</span><br/>
                    <input name="title" className="somoim-input" type="text" placeholder="소모임이름을 작성해주세요" aria-label="default input example" />
                    <br />

                    <span className="fw-bold">소모임소개</span><br/>
                    <input name="content" className="somoim-input" type="text" placeholder="간단하게 소개해주세요" aria-label="default input example" />

                    <br />

                    <span className="fw-bold">정모일</span><br/>
                    <input name="jdate" className="somoim-input" type="date" placeholder="Default input" aria-label="default input example" />

                    <br />

                    <span className="fw-bold">여행지</span><br/>
                    <input name="loc_trip" className="somoim-input" type="text" placeholder="어디 갈거에요?" aria-label="default input example" />

                    <br />

                    <span className="fw-bold">집결지</span><br/>
                    <input name="loc" className="somoim-input" type="text" placeholder="어디서 만날까요?" aria-label="default input example" />

                    <br />

                    <span className="fw-bold">인원</span><br/>
                    <input name="total" className="somoim-input" type="number" placeholder="몇명이 가나요?" aria-label="default input example" />



                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        닫기
                    </Button>
                    <Link to=""><Button variant="primary" onClick={handleClose}>
                        작성완료
                    </Button></Link>
                </Modal.Footer>
            </Modal>
        </div >
    );
}






