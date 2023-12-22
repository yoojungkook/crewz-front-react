import {Button, Col, Form, Image, Row} from "react-bootstrap";
import "./MyCrew.css"
import Modal from "react-bootstrap/Modal";
import {useState} from "react";

export default function PartInCrew() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = () => {//todo 리뷰 작성

    }
    return (
        <>
            <br/>
            <div id="crew-wrapper">
                <Row>
                    <Col>
                        <div id="photo-wrapper">
                            <Image src="/img/home-logo.png" rounded/>
                        </div>
                    </Col>
                    <Col>
                        <div id="crew-info">
                            <div id="crew-name">참가한 모임</div>
                            <div id="crew-etc">
                                <span>지역</span> | <span>카테고리</span> | <span>인원</span><br/>
                            </div>
                            <span>참여일자</span>
                            <div className="container-fluid d-flex justify-content-end">
                                <Button variant="danger" onClick={handleShow}>리뷰 작성</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <hr/>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>리뷰 작성하기</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>참가한 소모임명</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>제목</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>내용</Form.Label>
                            <Form.Control as="textarea" rows={2} style={{resize: "none"}}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>사진</Form.Label>
                            <Form.Control type="file"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" variant="danger" onClick={handleSubmit}>
                        작성
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}


