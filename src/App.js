import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Router from './Router';
import Header from './Component/Header';
import Footer from './Component/footer';

function App() {
  const [selectedButton, setSelectedButton] = useState('홈');

  const setPage = (label) => {
    setSelectedButton(label);
  }

  return (
    <Container className='App'>
      {/* <Row>
        <Col xs={1}></Col>
        <Col> */}
          <div>
            <Header />
          </div>
          <BrowserRouter>
            <Link to="/moim/home">
              <Button
                variant={selectedButton === '홈' ? 'danger' : 'outline-danger'}
                className={`menubar`}
                onClick={() => setPage('홈')}
              >
                홈
              </Button>
            </Link>
            <Link to="/somoim/home">
              <Button
                variant={selectedButton === '소모임' ? 'danger' : 'outline-danger'}
                className={`menubar`}
                onClick={() => setPage('소모임')}
              >
                소모임
              </Button>
            </Link>
            <Link to="/moim/albem">
              <Button
                variant={selectedButton === '사진첩' ? 'danger' : 'outline-danger'}
                className={`menubar`}
                onClick={() => setPage('사진첩')}
              >
                사진첩
              </Button>
            </Link>
            <Link to="/temp">
              <Button
                variant={selectedButton === '게시판' ? 'danger' : 'outline-danger'}
                className={`menubar`}
                onClick={() => setPage('게시판')}
              >
                게시판
              </Button>
            </Link>
            <Link to="/review/ReviewTest">
              <Button
                variant={selectedButton === '후기' ? 'danger' : 'outline-danger'}
                className={`menubar`}
                onClick={() => setPage('후기')}
              >
                후기
              </Button>
            </Link>
            <br /><hr style={{width : "200%", position : "relative", right: "60%"}}/>
            <Router />
          </BrowserRouter>
          
        {/* </Col>
        <Col xs={1}></Col>
      </Row> */}
      <Footer />
    </Container>
  );
}

export default App;
