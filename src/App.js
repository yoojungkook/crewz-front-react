import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MoimAdd from './Component/Moim/moimAdd';
import "./App.css"

const SearchContainer = styled.div`
`;

const SearchInput = styled.input`
  font-size : 1.3rem;
  padding-left : 1rem;
  height : 50px;
  width : 87%;
  border: 2px solid red;
  border-radius : .5rem;
  outline: none;
`;

const SearchButton = styled.button`
  height : 50px;
  width : 7%;
  margin-left : 3%;
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
export default function App() {
  const handleSearch = () => {
    // 검색 로직 추가
    console.log('검색 버튼이 클릭되었습니다.');
  };
  const [log, setLog] = useState(false); // 로그인 상태를 나타내는 state

  useEffect(() => {
    // 로그인 여부 확인 로직을 작성하세요.
    // 예를 들어, 로그인되어 있다면 setLog(true)를 호출합니다.
  }, []);

  return (
    <div className="App">
      <br></br>
      <Row>
        <Col xs={11}></Col>
        <Col xs={1}>
          <ul className="navbar-nav">
            {/* 로그인 상태에 따라 다른 내용을 보여주도록 수정하세요 */}
            {log ? (
              <li className="nav-item">
                <Link to="/">로그아웃</Link>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login">로그인</Link>
                </li>
                <li className="nav-item">
                  <Link to="/join">회원가입</Link>
                </li>
              </>
            )}
          </ul>
        </Col>
      </Row>


      <Container >
        <Row className="justify-content-md-center">
          <Col md="3">
            <img id="home_logo" src="/img/home-logo.png" alt="logo" />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="8">
            <SearchContainer >
              <SearchInput type="text" placeholder="검색어를 입력하세요" />
              <SearchButton onClick={handleSearch}>검색</SearchButton>
            </SearchContainer>
          </Col>
        </Row>
        <Row style={{ background: '#f2f2f2', marginTop: "2%", borderRadius: '1rem' }} className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div style={{ width: '32%', borderRadius: ".5rem", padding:   '5%', margin: ' 5px 5px ',cursor: 'pointer' }}>
            <Col>
              <Card.Img
                style={{ padding: '10%' }}
                src="/img/trip.png"
              />
              <Card.Body style={{ textAlign: 'center' }}>
                <Card.Title style={{ paddingBottom: '1rem' }}>
                  여행
                </Card.Title>
              </Card.Body>
            </Col>
          </div>
          <div style={{ width: '32%', borderRadius: ".5rem", padding: '5%', margin: ' 5px 5px ',cursor: 'pointer' }}>
            <Col>
              <Card.Img
                style={{ padding: '10%' }}
                src="/img/excercise.png"
              />
              <Card.Body style={{ textAlign: 'center' }}>
                <Card.Title style={{ paddingBottom: '1rem' }}>
                  운동
                </Card.Title>
              </Card.Body>
            </Col>
          </div>
          <div style={{ width: '32%', borderRadius: ".5rem", padding: '5%', margin: ' 5px 5px ',cursor: 'pointer' }}>
            <Col>
              <Card.Img
                style={{ padding: '10%' }}
                src="/img/book.png"
              />
              <Card.Body style={{ textAlign: 'center' }}>
                <Card.Title style={{ paddingBottom: '1rem' }}>
                  독서
                </Card.Title>
              </Card.Body>
            </Col>
          </div>

        </Row>


        {log ? (
          <>
            <div className="container-fluid fixed-bottom d-flex justify-content-end" style={{ padding: '20px 200px' }}>
              <MoimAdd />
            </div>
          </>
        ) : null}
      </Container>
    </div>
  );
}