import Menu from "./Menu";
import {Outlet} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import NavLogin from "../nav/NavLogin";
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
                <Col xs={8}>
                    <div className="container-fluid d-flex justify-content-end">
                    <NavLogin/>
                    </div>
                    <div id="content">
                        <Outlet/>
                    </div>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </>
    )
}