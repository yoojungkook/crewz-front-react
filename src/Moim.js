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

function Moim() {
  const [showMainModal, setShowMainModal] = useState(false);

  const handleMainShow = () => setShowMainModal(true);
  const handleMainClose = () => setShowMainModal(false);

  return (
    <Container className='App'>
      <div>
        <Header />
      </div>

      <div id='content'>
        <Outlet/>
      </div>
      <MoimAdd/>
      <div>
      <Button variant="primary" onClick={handleMainShow}>
        Open Main Modal
      </Button>

      <MainModal show={showMainModal} handleClose={handleMainClose} />
    </div> 
      <div>
        <Footer />
      </div>
    </Container>
  );
}

export default Moim;
