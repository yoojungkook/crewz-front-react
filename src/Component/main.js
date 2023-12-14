import { Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Join from "./guest/Join";
import Login from "./guest/Login";

export default function Main() {
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const openSignUpModal = () => setShowSignUpModal(true);
    const closeSignUpModal = () => setShowSignUpModal(false);

    const [showSignInModal, setShowSignInModal] = useState(false);
    const openSignInModal = () => setShowSignInModal(true);
    const closeSignInModal = () => setShowSignInModal(false);

    return (
        <div>
            <Navbar>
                <Nav className="main-nav">
                    <Nav.Link onClick={openSignUpModal}>회원가입</Nav.Link>
                    <Nav.Link onClick={openSignInModal}>로그인</Nav.Link>
                </Nav>
            </Navbar>

            <Join show={showSignUpModal} handleClose={closeSignUpModal} />
            <Login show={showSignInModal} handleClose={closeSignInModal} />
        </div>
    )
}