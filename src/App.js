import {useEffect, useState} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import MoimAdd from './Component/Moim/moimAdd';
import "./App.css"
import NavLogout from "./Component/nav/NavLogout";
import NavLogin from "./Component/nav/NavLogin";
import axios from "axios";
import ChatModal from "./Component/ChatModal";

const SearchContainer = styled.div`
`;

const SearchInput = styled.input`
  font-size: 1.3rem;
  padding-left: 1rem;
  height: 50px;
  width: 87%;
  border: 2px solid red;
  border-radius: .5rem;
  outline: none;
`;

const SearchButton = styled.button`
  height: 50px;
  width: 7%;
  margin-left: 3%;
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

    const [radios, setRadios] = useState([]);

    useEffect(() => {
        axios.get("http://crewz.asuscomm.com/api/category/list", {}, {})
        .then(function(res) {
            if(res.status === 200) {
                console.log(res.data.list);
                const newRadios = res.data.list.map(category => ({
                    value: category.no,
                    name: category.name,
                    photo: category.photo
                }));
                setRadios(newRadios);
                
            }
            // console.log("radios :" +  radios[0].value + "/" + radios[1].value);
        })
    }, [])

    const [log, setLog] = useState(false);

    useEffect(() => {
        const LoginId = localStorage.getItem("loginId");
        if (LoginId !== null) {
            setLog(true);
        }
    }, []);

    return (
        <div className="App">
            <br></br>
            <Row>
                <Col xs={11}></Col>
                <Col xs={1}>
                    <ul className="navbar-nav">
                        {log ? <NavLogin/> : <NavLogout/>}
                    </ul>
                </Col>
            </Row>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="3">
                        <img id="home_logo" src="/img/home-logo.png" alt="logo"/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="8">
                        <SearchContainer>
                            <SearchInput type="text" placeholder="검색어를 입력하세요"/>
                            <SearchButton onClick={handleSearch}>검색</SearchButton>
                        </SearchContainer>
                    </Col>
                </Row>
                <Row style={{background: '#f2f2f2', marginTop: "2%", borderRadius: '1rem'}}
                     className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {radios.map((radio, idx) => (
                        <Link 
                        to ="/moimlist"
                        style={{
                            width: '32%',
                            borderRadius: ".5rem",
                            padding: '5%',
                            margin: ' 5px 5px ',
                            cursor: 'pointer'
                        }}>
                            <Col>
                                <img
                                    style={{padding: '10%', width : '100%'}}
                                    // scr="http://crewz.asuscomm.com/api/category/img/car.png"
                                    src={`http://crewz.asuscomm.com/api/category/img/${radio.photo}`}
                                />
                                <Card.Body style={{textAlign: 'center'}}>
                                    <Card.Title style={{paddingBottom: '1rem'}}>
                                        {radio.name}
                                    </Card.Title>
                                </Card.Body>
                            </Col>
                        </Link>
                    ))}
                </Row>


                {log ? (
                    <>
                        <div className="container-fluid fixed-bottom d-flex justify-content-end"
                             style={{padding: '20px 200px'}}>
                            <MoimAdd/>
                        </div>
                    </>
                ) : null}
            </Container>
            

        </div>
    );
}