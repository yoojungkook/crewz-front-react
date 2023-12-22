import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/footer';
import MoimAdd from './Component/Moim/moimAdd';
import { Col, Row } from 'react-bootstrap';
import ChatModal from './Component/ChatModal';
import NavLogin from './Component/nav/NavLogin';
import NavLogout from './Component/nav/NavLogout';

function Moim() {
  const [log, setLog] = useState(false);

  useEffect(() => {
    const LoginId = localStorage.getItem("loginId");
    if (LoginId !== null) {
      setLog(true);
    }
  }, []);

  const [showMainModal, setShowMainModal] = useState(false);

  const handleMainShow = () => setShowMainModal(true);
  const handleMainClose = () => setShowMainModal(false);

  return (
    <>
      <Row className="App" style={{ padding: "0" }}>
        <Col xs={2}>
          <br /><br />
          
        </Col>
        <Col xs={8}>
          <div>
            <Header />
          </div>

          <div id='content'>
            <Outlet />
          </div>

          <div>
            <Footer />
          </div>
        </Col>
        <Col xs={2}>
          <div className="navbar-nav" style={{ paddingLeft: '34%', paddingTop: '10%' }}>
            {log ? <NavLogin /> : <NavLogout />}
          </div>

        </Col>
      </Row>

    </>
  );
}

export default Moim;
