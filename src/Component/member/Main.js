import Header from "./Header";
import Menu from "./Menu";
import Footer from "../footer";
import {Outlet} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import NavLogin from "../nav/NavLogin";

export default function Main() {
    return (
        <>
            {/*<div id="header">*/}
            {/*    <Header/>*/}
            {/*    /!*<NavLogin/>*!/*/}
            {/*</div>*/}
            <Row>
                <Col>
                    <div id="menu">
                        <Menu/>
                    </div>
                </Col>
                <Col>
                    <NavLogin/>
                    <div id="content">
                        <Outlet/>
                    </div>
                </Col>
            </Row>
            {/*<div id="footer">*/}
            {/*    <Footer/>*/}
            {/*</div>*/}
        </>
    )
}