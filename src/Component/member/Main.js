import Menu from "./Menu";
import {Outlet} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import "./Main.css"

export default function Main() {
    return (
        <>
            <Row >
                <Col xs={3}>
                    <div id="menu">
                        <Menu/>
                    </div>
                </Col>
                <Col xs={7}>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div id="content">
                        <Outlet/>
                    </div>
                </Col>
                <Col xs={2}></Col>
            </Row>
        </>
    )
}