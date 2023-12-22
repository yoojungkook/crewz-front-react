import {Image, Nav, Navbar, NavDropdown} from "react-bootstrap";
import "./Nav.css"
import axios from "axios";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function NavLogin() {
    const [log, setLog] = useState(false);
    const navigate = useNavigate();

    // useEffect(() => {
    //     const profile = document.getElementById("profile");
    //     profile.style.backgroundImage = "url(http://crewz.asuscomm.com/api/member/img?id=" + localStorage.getItem("loginId") + ")";
    //     // profile.style.back
    // }, []);

    const profile = (
        <Image
            src={'http://crewz.asuscomm.com/api/member/img?id=' + localStorage.getItem("loginId")}
            alt="profile"
            roundedCircle
            style={{width: '30px'}}
        />
    )

    const logoutHandler = () => {
        axios.post("http://crewz.asuscomm.com/api/member/logout", {}, {params: {"id": localStorage.getItem("loginId")}})
            .then(function (res) {
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
                        <Navbar.Collapse>
                        <Nav.Link id="notification" href="#"/>
                        <NavDropdown title={profile} id="profile">
                            <NavDropdown.Item href="/member/mypage">마이페이지</NavDropdown.Item>
                            <NavDropdown.Item href="/member/message">메세지함</NavDropdown.Item>
                            <NavDropdown.Item href="/member/mycrew">나의모임</NavDropdown.Item>
                            <NavDropdown.Item href="/member/mycrew/like">찜한모임</NavDropdown.Item>
                            <NavDropdown.Item href="/member/mycrew/partin">참가모임</NavDropdown.Item>
                            <NavDropdown.Item href="/member/review">리뷰관리</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#" onClick={logoutHandler}>로그아웃</NavDropdown.Item>
                        </NavDropdown>
                        </Navbar.Collapse>
                    </Nav>
                </Navbar>
            </Navbar>
        </div>
    )
}