import {Col, Image, Row} from "react-bootstrap";
import "./MyCrew.css"

export default function PartInCrew(){
    return(
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
                                <span>지역</span> | <span>카테고리</span> | <span>인원</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr/>
            </div>
        </>
    )
}