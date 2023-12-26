import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import styled from 'styled-components';
import "./moimcss.css";
import { Button } from 'react-bootstrap';
import MoimEdit from './moimEdit';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";


const Textarea = styled.textarea`
  width: 100%;
  min-height : 500px;
  font-size : 1.3rem;
  border:none; 
  outline:none;

`;

export default function Home() {
    const location = useLocation();
    const token = localStorage.getItem("token");
    const [info, setInfo] = useState([]);
    const [isJoined, setIsJoined] = useState(false);
    const [isOwner, setIsOwner] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const params = new URLSearchParams(location.search);
            const name = params.get("no");

            try {
                const infoRes = await axios.get(`http://crewz.asuscomm.com/api/moim/info/` + name);
                if (infoRes.status === 200 && infoRes.data.dto !== null) {
                    setInfo(infoRes.data.dto);
                }

                const joinRes = await axios.get("http://crewz.asuscomm.com/api/moim/get", {
                    params: { moimno: name, memberid: localStorage.getItem("loginId") }
                });

                if (joinRes.status === 200 && joinRes.data.dto !== null) {
                    
                    setIsJoined(true);
                    if (infoRes.data.dto.memberid === localStorage.getItem("loginId")) {
                        
                        setIsOwner(true);
                    }
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

    }, [location.search]);

    const joinMoim = () => {
        const params = new URLSearchParams(location.search);
        const name2 = params.get("no");
        
        const loginId = localStorage.getItem("loginId");
        
        axios.get("http://crewz.asuscomm.com/auth/moim/join/" + name2+ "/" + loginId ,
            { headers: { Authorization: token } })
            .then(function (res) {
                if (res.status === 200) {
                    alert("가입 되었습니다.");
                    window.location.reload();
                } else {

                }
            });
    }
    const outMoim = () => {
        const params = new URLSearchParams(location.search);
        const name2 = params.get("no");
        
        const loginId = localStorage.getItem("loginId");
        alert(loginId);
        axios.delete("http://crewz.asuscomm.com/auth/moim/out/" + name2+ "/" + loginId ,
            { headers: { Authorization: token } })
            .then(function (res) {
                if (res.status === 200) {
                    if(res.data.flag){
                        alert("성공적으로 삭제");
                    }else{
                        alert("삭제 실패");
                    }
                    
                    window.location.reload();
                } else {
                    alert(res.status);
                }
            });
    }
    return (
        <div>
            <div class="img_box">
                <Carousel class="carousel" data-bs-theme="dark">
                    <Carousel.Item className='carousel_item'>
                        <img
                            className="d-block"
                            src={"http://crewz.asuscomm.com/api/moim/img/" + info.no + "/1"}
                            // onError="this.src='https://picsum.photos/350/350'"
                        />

                    </Carousel.Item>

                    <Carousel.Item className='carousel_item'>
                        <img

                            className="d-block"
                            src={"http://crewz.asuscomm.com/api/moim/img/" + info.no + "/2"}
                            alt="https://picsum.photos/350/350"
                            // onError="this.src='https://picsum.photos/350/350'"
                        />

                    </Carousel.Item>

                    <Carousel.Item className='carousel_item'>
                        <img
                            className="d-block"
                            src={"http://crewz.asuscomm.com/api/moim/img/" + info.no + "/3"}
                            alt="https://picsum.photos/350/350"
                            //onError="this.src='https://picsum.photos/350/350'"
                        />

                    </Carousel.Item>
                </Carousel>
                <br />
            </div>

            <snap style={{ fontSize: '40px' }}>{info.title} </snap>
            {/* <Badge bg="primary">moim</Badge> */}
            <h4 style={{ color: '#a8a8a8' }}>{info.info}</h4><br />

            <div className="d-grid gap-2">
                {isJoined && !isOwner && (
                    <Button onClick={outMoim} variant="secondary" size="lg">
                        탈퇴 하기
                    </Button>
                )}
                {isOwner && <MoimEdit Moimno={info.no}/>}
                {!isJoined && !isOwner && (
                    <Button onClick={joinMoim} variant="danger" size="lg">
                        가입 하기
                    </Button>
                )}
            </div>
            <hr /><br />
            <Textarea id="content" value={info.content}>
            </Textarea>
        </div>

    );
}

