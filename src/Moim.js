import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/footer';
import MoimAdd from './Component/Moim/moimAdd';
import { Col, Row } from 'react-bootstrap';
import ChatModal from './Component/ChatModal';

function Moim() {
  const [showMainModal, setShowMainModal] = useState(false);

  const handleMainShow = () => setShowMainModal(true);
  const handleMainClose = () => setShowMainModal(false);

  return (
    <>
      <Row className="App" style={{padding : "0"}}>
      <Col xs={2}>

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
        <br/><br/><br/><br/>
          <ChatModal/>
        </Col>
      </Row>

    </>
  );
}

export default Moim;
