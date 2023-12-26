import { Row, Col, Image, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import SomoimAdd from './SomoimAdd';
import './somoimcss.css';
import { Link, useLocation } from 'react-router-dom';
import SomoimEdit from './somoimEdit';
import axios from "axios";

export default function SomoimHome() {
  const [radios, setRadios] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = new URLSearchParams(location.search);
        let name = params.get("no");

        const response = await axios.get("http://crewz.asuscomm.com/api/somoim/list/" + name);
        if (response.status === 200) {
          const newRadios = response.data.list.map(somoim => ({
            no: somoim.no,
            moimno: somoim.moimno,
            memberid: somoim.id,
            title: somoim.title,
            content: somoim.content,
            loc: somoim.loc,
            photo: somoim.photo,
            total: somoim.total,
            jdate: somoim.jdate
          }));
          setRadios(newRadios);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [location.search]);

  return (
    <div>
      {radios.map((radio, idx) => (
        <Row className="somoim_div" style={{ border: '1px solid black' }} key={idx}>
          {/* ... (이하 생략) */}
          <Col xs={3} className="somoim_img">
            <Image src={"http://crewz.asuscomm.com/api/somoim/img/" + radio.moimno + "/" + radio.no + "/" + radio.photo} fluid style={{ borderRadius: '5px' }} />
          </Col>
          <Col xs={9} className="position-relative somoim-content">
            <h4 className="fw-bold">{radio.title}</h4>
            <p>{radio.content}</p>
            <p>
              <span>정모일 : <jdate>{radio.jdate}</jdate></span>
              <br />
              <somoim-loc-trip>여행지 : {radio.loc}</somoim-loc-trip>
            </p>
            <Col xs={2} style={{ paddingBottom: '10px' }} className="position-absolute bottom-0 end-0">
              <Button variant="danger" className="somoim_join_btn shadow">가입하기</Button>
              <SomoimEdit item={radio} />
              <Button variant="outline-danger" className="del shadow" style={{ marginLeft: '12px', marginTop: '10px', width: '60px', height: '33px' }}>삭제</Button>
            </Col>
          </Col>
        </Row>
      ))}
      <SomoimAdd />
    </div>
  );
}