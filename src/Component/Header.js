import Row from "react-bootstrap/esm/Row";
import logoImg from "./logo.png";
import Col from "react-bootstrap/esm/Col";
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Router } from "react-router-dom";
import { Button } from "react-bootstrap";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom : 15px;
`;

const SearchInput = styled.input`
  padding: 8px;
  width : 90%;
  border: 2px solid red;
  outline: none;
`;

const SearchButton = styled.button`
  padding: 8px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
  margin-left: 8px;
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

  return (
    <div>
      <Row style={{ padding: '5px' }}>

        <Col xs={2}>
          <img style={{ width: '150px', borderRadius: '.3rem' }} src={logoImg} alt="로고사진" />

        </Col>

        <Col style={{ paddingTop: '5px' }} xs={10}>
          <SearchContainer >
            <SearchInput type="text" placeholder="검색어를 입력하세요" />
            <SearchButton onClick={handleSearch}>검색</SearchButton>

          </SearchContainer>
          <span style={{ position: "relative", left: "75%" }} >

            <Link to="/temp">로그아웃</Link>&nbsp;&nbsp;
            <Link to="/">홈으로</Link>&nbsp;&nbsp;
            <Link to="/temp">내 정보</Link>&nbsp;&nbsp;
          </span>

        </Col>
      </Row>
      <Link to="/moim/home">
        <Button
          variant={selectedButton === '홈' ? 'danger' : 'outline-danger'}
          className={`menubar`}
          onClick={() => setPage('홈')}
        >
          홈
        </Button>
      </Link>
      <Link to="/moim/somoim">
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
      <Link to="/moim/review/ReviewTest">
        <Button
          variant={selectedButton === '후기' ? 'danger' : 'outline-danger'}
          className={`menubar`}
          onClick={() => setPage('후기')}
        >
          후기
        </Button>
      </Link>
      <br /><hr style={{ width: "200%", position: "relative", right: "60%" }} />
      


    </div>
  )
}