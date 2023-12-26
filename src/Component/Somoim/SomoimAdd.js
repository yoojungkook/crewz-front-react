import React, { useState, useEffect } from 'react';
import { Form, InputGroup, Button, Modal } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './somoimcss.css';
import axios from 'axios';

export default function SomoimAdd() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const token = localStorage.getItem('token');
    const[dto,setDto] = useState({memberid:'',title:'',content:'',jdate:'',loc_trip:'',loc:'',total:''});
    const {title,content,jdate,loc_trip,loc,total} = dto;

    const location = useLocation();

    const [no, setNo] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        let name = params.get("no");
        setNo(name);
    })

    const onChange = (e) => {
        const { name, value } = e.target;
        setDto({
            ...dto,
            [name] : value
        })
    }

    const addSomoim = () => {
        let fdata = new FormData();
        const f = document.getElementById("f");
        fdata.append('memberid' , localStorage.getItem('loginId'));
        fdata.append('title', title);
        fdata.append('content', content);
        fdata.append('jdate',jdate);
        // fdata.append('loc_trip',loc_trip);
        fdata.append('loc',loc);
        fdata.append('moimno', no);
        fdata.append('total',total);
        fdata.append('mf',f.files[0]);
        axios.post('http://localhost/auth/somoim/add',fdata,
        {headers : {Authorization: token,"Content-Type" : "multipart/form-data"}})
        .then(function(res){
            if(res.status === 200){
                alert(res.data.msg + "소모임이 추가되었습니다.");

                
                
                setShow(false);
            }else{
                alert("에러" + res.status)
            }
        })
    }


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
                    <input type="file" name="f" id="f" />
                    <br /><br/>

                    <span className="fw-bold">소모임이름</span><br/>
                    <input name="title" value={title} className="somoim-input" type="text" placeholder="소모임이름을 작성해주세요" onChange={onChange}/>
                    <br />

                    <span className="fw-bold">소모임소개</span><br/>
                    <input name="content" value={content}className="somoim-input" type="text" placeholder="간단하게 소개해주세요" onChange={onChange} />

                    <br />

                    <span className="fw-bold">정모일</span><br/>
                    <input name="jdate" value={jdate} className="somoim-input" type="date" placeholder="Default input" onChange={onChange} />

                    <br />

                    <span className="fw-bold">여행지</span><br/>
                    <input name="loc_trip" value={loc_trip} className="somoim-input" type="text" placeholder="어디 갈거에요?" onChange={onChange} />

                    <br />

                    <span className="fw-bold">집결지 및 시간</span><br/>
                    <input name="loc" value={loc} className="somoim-input" type="text" placeholder="어디서 만날까요?" onChange={onChange} />

                    <br />

                    <span className="fw-bold">인원</span><br/>
                    <input name="total" value={total} className="somoim-input" type="number" placeholder="몇명이 가나요?" onChange={onChange} />



                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        닫기
                    </Button>
                    <Link to=""><Button variant="primary" onClick={addSomoim}>
                        작성완료
                    </Button></Link>
                </Modal.Footer>
            </Modal>
        </div >
    );
}






