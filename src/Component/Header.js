import Row from "react-bootstrap/esm/Row";
import logoImg from "./home-logo.png";
import Col from "react-bootstrap/esm/Col";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import NavLogin from "./nav/NavLogin";
import NavLogout from "./nav/NavLogout";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top : 2.5%;
`;

const SearchInput = styled.input`
  position : relative;
  left : -40px;
  padding-left : 15px;  
  font-size : 1.3rem;
  width : 90%;
  height : 60px;
  border: 2px solid red;
  outline: none;
`;

const SearchButton = styled.button`
  font-size : 1.4rem;
  background-color: red;
  height : 55px;
  width : 9%;
  color: white;
  border: none;
  border-radius: 4px;
  margin-left: 2%;
  cursor: pointer;
`;

export default function Header() {
  const handleSearch = () => {
    // 검색 로직 추가
    console.log('검색 버튼이 클릭되었습니다.');
  };

  const [selectedButton, setSelectedButton] = useState('홈');

  const setPage = (label) => {
    setSelectedButton(label);
  }

  const [radios, setRadios] = useState(0);

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    let name = params.get("no");

    // alert(name);

    setRadios(name);
  })

  const [log, setLog] = useState(false);

  useEffect(() => {
    const LoginId = localStorage.getItem("loginId");
    if (LoginId !== null) {
      setLog(true);
    }
  }, []);


  return (
    <div>
      <br></br>


      <Row style={{ margin: '1% 0' }}>

        <Col xs={3}>
          <img
            style={{ width: '80%', borderRadius: '.5rem' }}
            src={logoImg} alt="로고사진"
          />

        </Col>

        <Col style={{ paddingTop: '5px' }} xs={9}>
          <SearchContainer >
            <SearchInput type="text" placeholder="검색어를 입력하세요" />
            <SearchButton onClick={handleSearch}>검 색</SearchButton>
          </SearchContainer>
        </Col>
      </Row>
      <Link to={"/moim/home?no=" + radios}>
        <Button
          variant={selectedButton === '홈' ? 'danger' : 'outline-danger'}
          className={`menubar`}
          onClick={() => setPage('홈')}
        >
          홈
        </Button>
      </Link>
      <Link to={"/moim/somoim?no=" + radios}>
        <Button
          variant={selectedButton === '소모임' ? 'danger' : 'outline-danger'}
          className={`menubar`}
          onClick={() => setPage('소모임')}
        >
          소모임
        </Button>
      </Link>
      <Link to={"/moim/albem?no=" + radios}>
        <Button
          variant={selectedButton === '사진첩' ? 'danger' : 'outline-danger'}
          className={`menubar`}
          onClick={() => setPage('사진첩')}
        >
          사진첩
        </Button>
      </Link>
      <Link to={"/moim/board?no=" + radios}>
        <Button
          variant={selectedButton === '게시판' ? 'danger' : 'outline-danger'}
          className={`menubar`}
          onClick={() => setPage('게시판')}
        >
          게시판
        </Button>
      </Link>
      <Link to={"/moim/review?no=" + radios}>
        <Button
          variant={selectedButton === '후기' ? 'danger' : 'outline-danger'}
          className={`menubar`}
          onClick={() => setPage('후기')}
        >
          후기
        </Button>
      </Link>
      <br /><hr />



    </div>
  )
}