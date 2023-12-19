import Header from "./Header";
import Menu from "./Menu";
import Footer from "../footer";
import {Outlet} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import NavLogin from "../nav/NavLogin";
import "./Main.css"

export default function Main() {
    return (
        <>
            {/*<div id="header">*/}
            {/*    <Header/>*/}
            {/*    /!*<NavLogin/>*!/*/}
            {/*</div>*/}
            <Row >
                <Col xs={2}>
                    <div id="menu">
                        <Menu/>
                    </div>
                </Col>
                <Col xs={10}>
                    <NavLogin/>
                    <div id="content">
                        <Outlet/>
                    </div>
                </Col>
            </Row>
        </>
    )
}