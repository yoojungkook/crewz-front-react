import { useEffect, useState } from 'react';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Col, Form, Row } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './moimcss.css';

export default function MoimEdit({ Moimno }) {
    const navigate = useNavigate();
    const [lgShow, setLgShow] = useState(false);
    const token = localStorage.getItem("token");
    const [catno2, setCatno] = useState('1'); // catno 상태 추가
    const [dto, setDto] = useState({ no: '', memberid: '', title: '', info: '', content: '', photo1: '', photo2: '', photo3: '' });
    const { no, memberid, title, info, content, photo1, photo2, photo3 } = dto;


    const radios = [
        { name: '여행', value: '10' },
        { name: '운동', value: '9' },
        { name: '자동차', value: '11' },


    ];
    const onChange = (e) => {
        const { name, value } = e.target;
        setDto({
            ...dto,
            [name]: value
        })
    }

    useEffect(() => {
        console.log("name: " + Moimno);
        axios.get("http://crewz.asuscomm.com/api/moim/info/" + Moimno)
            .then(function (res) {
                if (res.status === 200) {
                    if (res.data.flag) {

                        const cat = res.data.dto.catno;
                        setDto(res.data.dto);
                        setCatno("11");
                    } else {
                        alert("모임정보 가져오기 실패");
                    }
                }
            })
    }, []);

    const editMoim = () => {
        const form = new FormData();
        form.append('no', no);
        form.append('catno', catno2);
        form.append('title', title);
        form.append('info', info);
        form.append('content', content);

        const f1 = document.getElementById('f');
        const f2 = document.getElementById('f2');
        const f3 = document.getElementById('f3');
        form.append('photo1', f1.files[0]);
        form.append('photo2', f2.files[0]);
        form.append('photo3', f3.files[0]);

        axios.put('http://crewz.asuscomm.com/auth/moim/edit', form, {
            headers: { Authorization: token, 'Content-Type': 'multipart/form-data' },
        })
            .then(function (res) {
                if (res.status === 200) {
                    alert(res.data.flag);
                    window.location.reload();
                    
                } else {
                    alert(`에러 ${res.status}`);
                }
            })
            .catch(function (error) {
                console.error('에러 발생: ', error);
            });

        setLgShow(false);
    };



    return (
        <>
            <Button id="edit_btn" variant="success" size="lg" onClick={() => setLgShow(true)}>수정하기</Button>
            <Modal
                style={{ fontSize: '20px' }}
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
                <Modal.Body className="text-center" style={{ padding: '50px' }}>
                    <Row>
                        <ButtonGroup>
                            {radios.map((radio, idx) => (
                                <Col>
                                    <ToggleButton
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        variant='outline-danger'
                                        name="radio"
                                        value={radio.value}
                                        checked={catno2 === radio.value}
                                        style={{ width: '95%', height: '110%' }}
                                        onChange={(e) => setCatno(e.currentTarget.value)}
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                </Col>
                            ))}
                        </ButtonGroup>
                    </Row><br /><br />

                    <input type="hidden" name="no" defaultValue={no} />
                    <span className="fw-bold">모임 이름을 적어주세요</span><br />
                    <input className="input" name="title" type="text" value={title} placeholder="ex) Root Trip!" onChange={onChange} />
                    <br /><br />

                    <span className="fw-bold">저희 모임은 이런 모음이에요!</span><br />
                    <input className="input" name="info" type="text" value={info} placeholder="ex)국내여행을 위한 크루!" onChange={onChange} />
                    <br /><br />

                    <span className="fw-bold">하고 싶은 말을 적어주세요!</span><br />
                    <textarea className="input" name="content" value={content} style={{ height: '300px' }} placeholder="Describe yourself here..." onChange={onChange} />
                    <br /><br />

                    <span className="fw-bold">모임을 보여주세요!!</span><br />
                    <input className="input" id="f" type="file" onChange={onChange} />
                    <br /><br />

                    <input className="input" id="f2" type="file" onChange={onChange} />
                    <br /><br />

                    <input className="input" id="f3" type="file" onChange={onChange} />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setLgShow(false)}>
                        닫기
                    </Button>

                    <Button variant="primary" onClick={editMoim}>
                        작성완료
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );
}