import {Nav, Navbar, NavDropdown} from "react-bootstrap";

export default function NavLogin() {
    return (
        <div>
            <Navbar>
                <Navbar className="nav-login">
                    <Nav>
                        <Nav.Link href="#">알림</Nav.Link>
                        <NavDropdown class="profile">
                            <NavDropdown.Item href="#">마이페이지</NavDropdown.Item>
                            <NavDropdown.Item href="#">내모임</NavDropdown.Item>
                            <NavDropdown.Item href="#">내리뷰</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#">로그아웃</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </Navbar>
        </div>
    )
}