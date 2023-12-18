import { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SomoimEdit() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className=" shadow" style={{ marginTop: '10px', width: '60px', height: '33px' }} variant="outline-danger" onClick={handleShow}>
                수정
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form action="/somoim" method="post" encType="multipart/form-data">
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">&emsp;썸네일 선택</Form.Label><br />
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroupFile01">올리기</InputGroup.Text>
                                <Form.Control type="file" name="f" id="inputGroupFile01" />
                            </InputGroup>
                        </Form.Group>
                        <br />
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">&emsp;소모임이름</Form.Label>
                            <Form.Control name="title" className="somoim-input" type="text" placeholder="소모임이름을 작성해주세요" aria-label="default input example" />
                        </Form.Group>
                        <br />
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">&emsp;소모임소개</Form.Label>
                            <Form.Control name="content" className="somoim-input" type="text" placeholder="간단하게 소개해주세요" aria-label="default input example" />
                        </Form.Group>
                        <br />
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">&emsp;정모일</Form.Label>
                            <Form.Control name="jdate" className="somoim-input" type="date" placeholder="Default input" aria-label="default input example" />
                        </Form.Group>
                        <br />
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">&emsp;여행지</Form.Label>
                            <Form.Control name="loc_trip" className="somoim-input" type="text" placeholder="어디 갈거에요?" aria-label="default input example" />
                        </Form.Group>
                        <br />
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">&emsp;집결지</Form.Label>
                            <Form.Control name="loc" className="somoim-input" type="text" placeholder="어디서 만날까요?" aria-label="default input example" />
                        </Form.Group>
                        <br />
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">&emsp;인원</Form.Label>
                            <Form.Control name="total" className="somoim-input" type="number" placeholder="몇명이 가나요?" aria-label="default input example" />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SomoimEdit;