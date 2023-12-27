import {Col, Image, Row} from "react-bootstrap";
import "./MyCrew.css"
import { useEffect, useState } from "react";
import axios from "axios";

export default function MyCrew() {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios.get("http://crewz.asuscomm.com/api/moim/mymoimlist/" + localStorage.getItem("loginId"))
        .then(function(res) {
            if(res.status === 200) {
                if(res.data.list !== null) {
                    const item = res.data.list.map(item =>  ({
                        no: item.no,
                        catno: item.catno,
                        info: item.info,
                        title: item.title,
                        content: item.content,
                        photo: item.photo1
                    }))
                    setInfo(item);
                }
            }
        })
    })

    return (
        <>
            <br/>
            <div className="App"id="crew-wrapper">
                {info.map((item, idx) => (
                    <>
                        <Row style={{backgroundColor:"#f3f3f3"}}>
                            <Col>
                                <div id="photo-wrapper">
                                    <Image src={`http://crewz.asuscomm.com/api/moim/img/${item.no}/1`} rounded/>
                                </div>
                            </Col>
                            <Col>
                                <div id="crew-info">
                                    <br/>
                                    <div id="crew-name">{item.title}</div>
                                    <div id="crew-etc">
                                        {item.info}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <hr/>
                    </>
                ))}
            </div>
        </>
    )
}