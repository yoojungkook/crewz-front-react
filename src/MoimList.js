import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import MoimAdd from './Component/Moim/moimAdd';
import "./App.css"
import NavLogout from "./Component/nav/NavLogout";
import NavLogin from "./Component/nav/NavLogin";
import axios from "axios";

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
export default function MoimList() {
  const handleSearch = () => {
    // 검색 로직 추가
    console.log('검색 버튼이 클릭되었습니다.');
  };
  const [log, setLog] = useState(false); // 로그인 상태를 나타내는 state

  const location = useLocation();

  const [info, setInfo] = useState([]);

  useEffect(() => {
    // 로그인 여부 확인 로직을 작성하세요.
    // 예를 들어, 로그인되어 있다면 setLog(true)를 호출합니다.
    const params = new URLSearchParams(location.search);
        
    let no = params.get("category");

    axios.get('http://localhost/api/moim/category', {params: {catno: no}})
    .then(function(res) {
      if(res.status === 200) {
        if(res.data.list !== null) {
          console.log(res.data.list);
          const item = res.data.list.map((item) => ({
            info: item.info,
            photo: item.photo1,
            title: item.title,
            no: item.no
          }));

          console.log(item);

          setInfo(item);
        }
      }
    })

  }, []);

  return (
    <div className="App">
      <br></br>
      <Row>
        <Col xs={10}></Col>
        <Col xs={2}>
          <ul className="navbar-nav">
            {log ? <NavLogin /> : <NavLogout />}
          </ul>
        </Col>
      </Row>


      <Container >
        <Row className="justify-content-md-center">
          <Col md="3">
            <img id="home_logo" src="/img/home-logo.png" alt="logo" />
          </Col>
        </Row>
        {/* <Row className="justify-content-md-center">
          <Col md="8">
            <SearchContainer className="d-flex">
              <SearchInput type="text" placeholder="검색어를 입력하세요" />
              <SearchButton onClick={handleSearch} style={{"margin-left":"auto"}}>검색</SearchButton>
            </SearchContainer>
          </Col>
        </Row> */}



        <Row style={{ background: '#f2f2f2', marginTop: "2%", borderRadius: '1rem', padding: '3%' }} className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {info.map((item, idx) => (
            <Link to={"/moim/home?no=" + item.no} >
            <div style={{ width: '100%', backgroundColor: 'white',borderRadius: ".5rem", padding: '5%', margin: ' 5px 5px ', cursor: 'pointer' }}>
              <Col>
                <Card className="shadow-sm">
                  <Card.Img
                    variant="top"
                    src={"http://localhost/api/moim/img/" + item.no + "/1" }
                  />
                </Card>
                <br />
                <Card.Body style={{ textAlign: 'center' }}>
                  <Card.Title style={{ fontSize: '1.6rem', paddingBottom: '.5rem' }}>{item.title}</Card.Title>
                </Card.Body>
              </Col>
            </div>
          </Link>
          ))}
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