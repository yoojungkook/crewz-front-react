import { useState } from 'react';
import {  Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Example() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: '여행', value: '1' },
        { name: '운동', value: '2' },
        { name: '독서', value: '3' },
        { name: '기타', value: '4' },

    ];
    const [lgShow, setLgShow] = useState(false);

    return (
        <>

            <Button size="lg"onClick={() => setLgShow(true)}>모임 생성 버튼</Button>

            <Modal 
                style={{fontSize : '20px'}}
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Large Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center" style={{padding: '50px'}}>
                    <Form.Group controlId="catno">
                        <Form.Label className="fw-bold">어떤 모임인가요?</Form.Label><br/>
                        <br />
                        <Row>
                            <Col>
                                <Form.Check type="radio"
                                    name="catno"
                                    value="1"
                                    id="exercise_select"
                                    label="운동"
                                    
                                /></Col>
                            <Col>
                                <Form.Check
                                    type="radio"
                                    name="catno"
                                    value="2"
                                    id="reading_select"
                                    label="독서"
                                    
                                /></Col>
                            <Col>
                                <Form.Check
                                    type="radio"
                                    name="catno"
                                    value="3"
                                    id="trip-select"
                                    label="여행"
                                    
                                /></Col>
                            <Col>
                                <Form.Check
                                    type="radio"
                                    name="catno"
                                    value="4"
                                    id="other-select"
                                    label="기타"
                                    
                                /></Col>
                        </Row>
                    </Form.Group><br/><br/>

                    {/* <Row>
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                            <Col>
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                style = {{width : '80%'}}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                            </Col>
                        ))}
                    </ButtonGroup>
                    </Row><br/><br/> */}

                    <Form.Group controlId="moimtitle">
                        <Form.Label className="fw-bold">모임 이름을 적어주세요</Form.Label>
                        <Form.Control type="text" placeholder="ex) Root Trip!" />
                    </Form.Group><br/><br/>
                    <Form.Group controlId="moiminfo">
                        <Form.Label className="fw-bold">저희 모임은 이런 모음이에요!</Form.Label>
                        <Form.Control type="text" placeholder="ex)국내여행을 위한 크루!" />
                    </Form.Group><br/><br/>
                    <Form.Group controlId="moimcontent">
                        <Form.Label className="fw-bold">하고 싶은 말을 적어주세요!</Form.Label>
                        <Form.Control as="textarea" style={{ height: '200px' }} placeholder="Describe yourself here..." />
                    </Form.Group><br/><br/>
                    <Form.Group controlId="formFileSm1">
                        <Form.Label className="fw-bold">모임을 보여주세요!!</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group><br/><br/>
                    <Form.Group controlId="formFileSm2">
                        <Form.Control type="file" />
                    </Form.Group><br/><br/>
                    <Form.Group controlId="formFileSm3">
                        <Form.Control type="file" />
                    </Form.Group><br/><br/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setLgShow(false)}>
                        닫기
                    </Button>

                    <Button variant="primary" onClick={() => setLgShow(false)}>
                        작성완료
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;