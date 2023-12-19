import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import "./Nav.css"
import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function NavLogin() {
    const [log, setLog] = useState(false);
    const navigate = useNavigate();
    const logoutHandler = () => {
        axios.post("http://crewz.asuscomm.com/api/member/logout", {}, {params: {"id" : localStorage.getItem("loginId")}})
            .then(function(res) {
                localStorage.removeItem("loginId");
                localStorage.removeItem("token");

                setLog(false);
                navigate('/');
                window.location.reload();
            });
    }

    return (
        <div>
            <Navbar>
                <Navbar className="nav-login">
                    <Nav>
                        <Nav.Link id="notification" href="#"/>
                        <NavDropdown id="profile">
                            <NavDropdown.Item href="/member/info">마이페이지</NavDropdown.Item>
                            <NavDropdown.Item href="/member/message">메세지함</NavDropdown.Item>
                            <NavDropdown.Item href="/member/crew">나의모임</NavDropdown.Item>
                            <NavDropdown.Item href="/member/crew/like">찜한모임</NavDropdown.Item>
                            <NavDropdown.Item href="/member/crew/partin">참가모임</NavDropdown.Item>
                            <NavDropdown.Item href="/member/review">리뷰관리</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#" onClick={logoutHandler}>로그아웃</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </Navbar>
        </div>
    )
}