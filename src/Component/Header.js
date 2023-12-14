import Row from "react-bootstrap/esm/Row";
import logoImg from "./logo.png";
import Col from "react-bootstrap/esm/Col";
import React from 'react';
import styled from 'styled-components';

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
    return (
        
        <Row style={{padding : '5px'}}>
            
            <Col xs={2}>
            <img style={{ width: '150px', borderRadius : '.3rem'}} src={logoImg} alt="로고사진" />

            </Col>

            <Col style={{ paddingTop:'5px'}} xs={10}>
                <SearchContainer >
                    <SearchInput type="text" placeholder="검색어를 입력하세요" />
                    <SearchButton onClick={handleSearch}>검색</SearchButton>
                    
                </SearchContainer>
                <span style={{position : "relative", left : "75%"}} >
                 
                  <a href="/temp">로그아웃</a>&nbsp;&nbsp;
                  <a href="/temp">홈으로</a>&nbsp;&nbsp;
                  <a href="/temp">내 정보</a>&nbsp;&nbsp;
                </span>
                
            </Col>
        </Row>


    )
}