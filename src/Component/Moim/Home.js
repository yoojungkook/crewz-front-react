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

    const [info, setInfo] = useState([]);

    // const {s no }
    

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        
        let name = params.get("no");

        // alert(name);

        axios.get(`http://crewz.asuscomm.com/api/moim/info/` + name)
        .then(function(res) {
            if(res.status === 200) {
                // console.log("moim: " + res.data.dto.);
                if(res.data.dto !== null)
                    setInfo(res.data.dto);
            }
        })
    })

    // useEffect(()=>{
    //     const params = new URLSearchParams(location.search);
        
    //     let nameTwo = params.get("no");
    //     // {
    //         // localStorage.getItem("loginId") !== null ? (
    //         axios.get("http://localhost/api/moim/get", { params: { moimno: nameTwo, memberid: localStorage.getItem("loginId") } })
    //             .then(function (res) {
    //                 if (res.status === 200) {
    //                     // if(res.data.dto !== null) {
    //                     //     return (
    //                     //         <Button variant="secondary" size="lg">
    //                     //             탈퇴 하기
    //                     //         </Button>
    //                     //     );
    //                     // }

    //                 }
    //             })
    //         // ) : <div></div>
    //     // }
    // })

    return (
        <div>
            <div class="img_box">
                <Carousel class="carousel" data-bs-theme="dark">
                    <Carousel.Item className='carousel_item'>
                        <img
                            className="d-block"
                            src={"http://crewz.asuscomm.com/api/moim/img/" + info.no + "/1"}
                            alt="First slide"
                        />

                    </Carousel.Item>

                    <Carousel.Item className='carousel_item'>
                        <img

                            className="d-block"
                            src={"http://crewz.asuscomm.com/api/moim/img/" + info.no + "/2"}
                            alt="Second slide"
                        />

                    </Carousel.Item>

                    <Carousel.Item className='carousel_item'>
                        <img
                            className="d-block"
                            src={"http://crewz.asuscomm.com/api/moim/img/" + info.no + "/3"}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
                <br />
            </div>

            <snap style={{ fontSize: '40px' }}>{info.title} </snap>
            {/* <Badge bg="primary">moim</Badge> */}
            <h4 style={{ color: '#a8a8a8' }}>{info.info}</h4><br />

            <div className="d-grid gap-2">
                
                {/* 남이 만든 모임 */}
                <Button variant="danger" size="lg">
                    가입 하기
                </Button>
                {/* 내가 만든 모임일 경우 */}
                <MoimEdit/>
                {/* 이미 가입된 모임의 경우 */}
                <Button variant="secondary" size="lg">
                    탈퇴 하기
                </Button>

            </div>
            <hr /><br />
            <Textarea id="content" value={info.content}>
            </Textarea>

        </div>

    );
}

