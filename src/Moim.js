import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Header from './Component/Header';
import Footer from './Component/footer';
import MoimAdd from './Component/Moim/moimAdd';
import MainModal from './MainModal';
import { Col, Row } from 'react-bootstrap';

function Moim() {
  const [showMainModal, setShowMainModal] = useState(false);

  const handleMainShow = () => setShowMainModal(true);
  const handleMainClose = () => setShowMainModal(false);

  return (
    <>
      <Row className="App" style={{padding : "0"}}>
      <Col xs={1}></Col>
        <Col xs={8}>
        <div>
          <Header />
        </div>

        <div id='content'>
          <Outlet />
        </div>
        <MoimAdd />   
        <div>
          <Footer />
        </div>
        </Col> 
        <Col xs={3}>
        <iframe src='https://chatdoge-test-6eg.pages.dev/' title="External Content" width="100%" height="500px"></iframe>
        </Col>
      </Row>

    </>
  );
}

export default Moim;
