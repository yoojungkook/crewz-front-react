import { Button, Col, Form, Image, Row } from "react-bootstrap";
import "./MyCrew.css"
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import axios from "axios";
import '../Somoim/somoimcss.css';

export default function PartInCrew() {
    const [show, setShow] = useState(false);
    const [radio, setRadio] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = () => {//todo 리뷰 작성
    }
    useEffect(() => {
        axios.get("http://crewz.asuscomm.com/api/somoim/mysomoim/" + localStorage.getItem("loginId"))
            .then(function (res) {
                if (res.status === 200) {
                    if (res.data.flag) {
                        const newRadios = res.data.list.map(somoim => ({
                            no: somoim.no,
                            moimno: somoim.moimno,
                            memberid: somoim.memberid,
                            title: somoim.title,
                            content: somoim.content,
                            loc: somoim.loc,
                            photo: somoim.photo,
                            total: somoim.total,
                            jdate: somoim.jdate,

                        }));
                        setRadio(newRadios);
                    } else {
                        console.log("flag : false");
                    }

                } else {
                    console.log("에러 : " + res.status)
                }

            })
    })

    
    return (
        <>

            <div className="App" >
                <h1>내가 참가한 소모임</h1>
                
                {radio.map((radio, idx) => (
                    <Row className="somoim_div" style={{ backgroundColor: '#f1f1f1' }} key={idx}>
                        <Col xs={3} className="somoim_img">
                            <Image src={"http://crewz.asuscomm.com/api/somoim/img/" + radio.moimno + "/" + radio.no + "/" + radio.photo} fluid style={{ borderRadius: '5px' }} />
                        </Col>
                        <Col xs={9} className="position-relative somoim-content">
                            
                            <h4 className="fw-bold">{radio.title}</h4>
                            <p>{radio.content}</p>
                            <p>
                                <span>정모일 : <SomoimDate>{radio.jdate}</SomoimDate></span>
                                <br />
                                <span>여행지 : {radio.loc}</span>
                            </p>
                            <Col xs={2} style={{ paddingBottom: '10px' }} className="position-absolute bottom-0 end-0">
                                <div className="container-fluid d-flex justify-content-end">
                                    {/* <Button variant="danger" onClick={handleShow}>리뷰 작성</Button> */}
                                </div>
                            </Col>
                        </Col>
                    </Row>
                ))}
            </div>
            <hr />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>리뷰 작성하기</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>참가한 소모임명</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>제목</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>내용</Form.Label>
                            <Form.Control as="textarea" rows={2} style={{ resize: "none" }} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>사진</Form.Label>
                            <Form.Control type="file" />
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

function SomoimDate({ children }) {
    // 실제 사용할 날짜 포맷팅 로직은 여기에 추가하세요
    const formattedDate = new Date(children).toLocaleDateString();
    return <span>{formattedDate}</span>;
}

