import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Col, Form, Row } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './moimcss.css';


function Example() {
    const navigate = useNavigate();
    const [lgShow, setLgShow] = useState(false);
    const token = sessionStorage.getItem("token");
    const [catno2, setCatno] = useState('1'); // catno 상태 추가
    const [dto, setDto] = useState({ memberid:'', title: '',info:'',content: '', f: '',f2:'',f3:'' });
    const { memberid ,title,info,content, f,f2,f3 } = dto;

    const radios = [
        { name: '여행', value: '1' },
        { name: '운동', value: '2' },
        { name: '독서', value: '3' },
        { name: '기타', value: '4' },

    ];
    const onChange = (e) => {
        const { name, value } = e.target;
        setDto({
            ...dto,
            [name]: value
        })
    }
    const addMoim = (event) => {
        alert("들어옴" + catno2);
        // let fdata = new FormData();
        // let f1 = document.getElementById('f');
        // let f2 = document.getElementById('f2');
        // let f3 = document.getElementById('f3');
        // fdata.append('catno',catno2);
        // fdata.append('title', title);
        // fdata.append('info', info);
        // fdata.append('content', content);
        // fdata.append('mf', f1.files[0]);
        // fdata.append('mf', f2.files[0]);
        // fdata.append('mf', f3.files[0]);
        // axios.post('http://crewz.asuscomm.com/auth/moim/add',fdata,
        // { headers: { Authorization: token, "Content-Type": "multipart/form-data" } })
        // .then(function (res){
        //     if(res.status === 200){
        //         alert(res.data.dto.title + " 글이 추가되었습니다");
        //         navigate('/moim/home/' + res.data.dto.no);
        //     }else{
        //         alert("에러" + res.status);
        //     }
        // })
        setLgShow(false);
    }

    return (
        <>
            <Button size="lg" onClick={() => setLgShow(true)}>모임 생성 버튼</Button>
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


                    <span className="fw-bold">모임 이름을 적어주세요</span><br />
                    <input className="input" name="title" type="text" value={title} placeholder="ex) Root Trip!" onChange={onChange}/>
                    <br /><br />

                    <span className="fw-bold">저희 모임은 이런 모음이에요!</span><br />
                    <input className="input" name="info" type="text" value={info} placeholder="ex)국내여행을 위한 크루!" onChange={onChange} />
                    <br /><br />

                    <span className="fw-bold">하고 싶은 말을 적어주세요!</span><br />
                    <textarea className="input" name="content" value={content} style={{ height: '300px' }} placeholder="Describe yourself here..." onChange={onChange} />
                    <br /><br />

                    <span className="fw-bold">모임을 보여주세요!!</span><br />
                    <input className="input" name="f" type="file" value={f} onChange={onChange} />
                    <br /><br />

                    <input className="input" name="f2" type="file" value={f2} onChange={onChange}/>
                    <br /><br />

                    <input className="input" name="f3" type="file" value={f3} onChange={onChange}/>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setLgShow(false)}>
                        닫기
                    </Button>

                    <Button variant="primary" onClick={addMoim}>
                        작성완료
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;



// import { useState } from 'react';
// import { Col, Form, Row } from 'react-bootstrap';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ToggleButton from 'react-bootstrap/ToggleButton';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';


// function Example() {
//     const [checked, setChecked] = useState(false);
//     const [radioValue, setRadioValue] = useState('1');

//     const radios = [
//         { name: '여행', value: '1' },
//         { name: '운동', value: '2' },
//         { name: '독서', value: '3' },
//         { name: '기타', value: '4' },

//     ];
//     const [lgShow, setLgShow] = useState(false);

//     const addMoim = (event) => {
//         let fdata = new FormData();
//         console.log("1");
//         alert("들어옴");
//         let f1 = document.getElementById('f');
//         let f2 = document.getElementById('f2');
//         let f3 = document.getElementById('f3');
//         fdata.append('title', title);
//         fdata.append('info', info);
//         fdata.append('content', content);
//         fdata.append('mf', f1.files[0]);
//         fdata.append('mf', f2.files[0]);
//         fdata.append('mf', f3.files[0]);
//         axios.post('http://crewz.asuscomm.com/auth/moim/add',fdata,
//         { headers: { Authorization: token, "Content-Type": "multipart/form-data" } })
//         .then(function (res){
//             if(res.status === 200){
//                 alert(res.data.dto.title + " 글이 추가되었습니다");
//                 navigate('/moim/home/' + res.data.dto.no);
//             }else{
//                 alret("에러" + res.status);
//             }
//         })
//     }

//     return (
//         <>
//             <Button size="lg" onClick={() => setLgShow(true)}>모임 생성 버튼</Button>
//             <Modal
//                 style={{ fontSize: '20px' }}
//                 size="lg"
//                 show={lgShow}
//                 onHide={() => setLgShow(false)}
//                 aria-labelledby="example-modal-sizes-title-lg"
//             >
//                 <Modal.Header closeButton>
//                     <Modal.Title id="example-modal-sizes-title-lg">
//                         Large Modal
//                     </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body className="text-center" style={{ padding: '50px' }}>
//                     {/* <Form.Group controlId="catno">
//                         <Form.Label className="fw-bold">어떤 모임인가요?</Form.Label><br/>
//                         <br />
//                         <Row>
//                             <Col>
//                                 <Form.Check type="radio"
//                                     name="catno"
//                                     value="1"
//                                     id="exercise_select"
//                                     label="운동"
                                    
//                                 /></Col>
//                             <Col>
//                                 <Form.Check
//                                     type="radio"
//                                     name="catno"
//                                     value="2"
//                                     id="reading_select"
//                                     label="독서"
                                    
//                                 /></Col>
//                             <Col>
//                                 <Form.Check
//                                     type="radio"
//                                     name="catno"
//                                     value="3"
//                                     id="trip-select"
//                                     label="여행"
                                    
//                                 /></Col>
//                             <Col>
//                                 <Form.Check
//                                     type="radio"
//                                     name="catno"
//                                     value="4"
//                                     id="other-select"
//                                     label="기타"
                                    
//                                 /></Col>
//                         </Row>
//                     </Form.Group><br/><br/> */}

//                     <Row>
//                         <ButtonGroup>
//                             {radios.map((radio, idx) => (
//                                 <Col>
//                                     <ToggleButton
//                                         key={idx}
//                                         id={`radio-${idx}`}
//                                         type="radio"
//                                         variant={idx % 2 ? 'outline-success' : 'outline-danger'}
//                                         name="radio"
//                                         value={radio.value}
//                                         checked={radioValue === radio.value}
//                                         style={{ width: '80%' }}
//                                         onChange={(e) => setRadioValue(e.currentTarget.value)}
//                                     >
//                                         {radio.name}
//                                     </ToggleButton>
//                                 </Col>
//                             ))}
//                         </ButtonGroup>
//                     </Row><br /><br />


//                     <span className="fw-bold">모임 이름을 적어주세요</span><br />
//                     <input className="input" name="title" type="text" placeholder="ex) Root Trip!" />
//                     <br /><br />

//                     <span className="fw-bold">저희 모임은 이런 모음이에요!</span><br />
//                     <input className="input" name="info" type="text" placeholder="ex)국내여행을 위한 크루!" />
//                     <br /><br />

//                     <span className="fw-bold">하고 싶은 말을 적어주세요!</span><br />
//                     <input className="input" name="content" as="textarea" style={{ height: '200px' }} placeholder="Describe yourself here..." />
//                     <br /><br />

//                     <span className="fw-bold">모임을 보여주세요!!</span><br />
//                     <input className="input" name="f" type="file" />
//                     <br /><br />

//                     <input className="input" name="f2" type="file" />

//                     <input className="input" name="f3" type="file" />

//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setLgShow(false)}>
//                         닫기
//                     </Button>

//                     <Button variant="primary" onClick={addMoim}>
//                         작성완료
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// }

// export default Example;