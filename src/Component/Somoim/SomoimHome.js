import { Row, Col, Image, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import SomoimAdd from './SomoimAdd';
import './somoimcss.css';
import { Link } from 'react-router-dom';
import SomoimEdit from './somoimEdit';

export default function SomoimHome() {

  
  return (
    <div>
      <Row className="somoim_div">
        <Col xs={3} className="somoim_img">
          <Image src="https://picsum.photos/500/400" fluid style={{ borderRadius: '5px' }} />
        </Col>
        <Col xs={9} className="position-relative somoim-content">
          <h4 className="fw-bold">제목</h4>
          <p>본문</p>
          <p>
            <span>정모일 : <jdate></jdate></span>
            <br />
            <somoim-loc-trip>여행지 :</somoim-loc-trip>
            <br />
            <somoim-loc>집결 장소 : </somoim-loc>
            <br />
            참석 : <cnt> </cnt> / <somoim-total> </somoim-total>
          </p>
          <Col xs={2} style={{ paddingBottom: '10px' }} className="position-absolute bottom-0 end-0">
            <Button variant="danger" className="somoim_join_btn shadow">가입하기</Button>
            
            <SomoimEdit/>
            <Button variant="outline-danger" className="del shadow" style={{ marginLeft: '12px', marginTop: '10px', width: '60px', height: '33px' }}>삭제</Button>
          </Col>
        </Col>
      </Row>
      <Row className="somoim_div">
        <Col xs={3} className="somoim_img">
          <Image src="https://picsum.photos/500/400" fluid style={{ borderRadius: '5px' }} />
        </Col>
        <Col xs={9} className="position-relative somoim-content">
          <h4 className="fw-bold">제목</h4>
          <p>본문</p>
          <p>
            <span>정모일 : <jdate></jdate></span>
            <br />
            <somoim-loc-trip>여행지 :</somoim-loc-trip>
            <br />
            <somoim-loc>집결 장소 : </somoim-loc>
            <br />
            참석 : <cnt> </cnt> / <somoim-total> </somoim-total>
          </p>
          <Col xs={2} style={{ paddingBottom: '10px' }} className="position-absolute bottom-0 end-0">
            <Button variant="danger" className="somoim_join_btn shadow">가입하기</Button>
            
            <SomoimEdit/>
            <Button variant="outline-danger" className="del shadow" style={{ marginLeft: '12px', marginTop: '10px', width: '60px', height: '33px' }}>삭제</Button>
          </Col>
        </Col>
      </Row>
      <Row className="somoim_div">
        <Col xs={3} className="somoim_img">
          <Image src="https://picsum.photos/500/400" fluid style={{ borderRadius: '5px' }} />
        </Col>
        <Col xs={9} className="position-relative somoim-content">
          <h4 className="fw-bold">제목</h4>
          <p>본문</p>
          <p>
            <span>정모일 : <jdate></jdate></span>
            <br />
            <somoim-loc-trip>여행지 :</somoim-loc-trip>
            <br />
            <somoim-loc>집결 장소 : </somoim-loc>
            <br />
            참석 : <cnt> </cnt> / <somoim-total> </somoim-total>
          </p>
          <Col xs={2} style={{ paddingBottom: '10px' }} className="position-absolute bottom-0 end-0">
            <Button variant="danger" className="somoim_join_btn shadow">가입하기</Button>
            
            <SomoimEdit/>
            <Button variant="outline-danger" className="del shadow" style={{ marginLeft: '12px', marginTop: '10px', width: '60px', height: '33px' }}>삭제</Button>
          </Col>
        </Col>
      </Row>
      <SomoimAdd/>

    </div>

  )
}