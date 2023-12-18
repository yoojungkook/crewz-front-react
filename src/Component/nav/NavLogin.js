import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import "./Nav.css"
import {Link} from "react-router-dom";

export default function NavLogin() {
    return (
        <div>
            <Navbar>
                <Navbar className="nav-login">
                    <Nav>
                        <Nav.Link id="notification" href="#"/>
                        <NavDropdown id="profile">
                            <NavDropdown.Item href="/member/info">마이페이지</NavDropdown.Item>
                            <NavDropdown.Item href="#">메세지함</NavDropdown.Item>
                            <NavDropdown.Item href="#">나의모임</NavDropdown.Item>
                            <NavDropdown.Item href="#">리뷰관리</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#">로그아웃</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </Navbar>
        </div>
    )
}