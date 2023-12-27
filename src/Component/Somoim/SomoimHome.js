import { Row, Col, Image, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import SomoimAdd from './SomoimAdd';
import './somoimcss.css';
import SomoimEdit from './somoimEdit';
import axios from "axios";
import { useLocation } from 'react-router-dom';

export default function SomoimHome() {
  const [radios, setRadios] = useState([]);
  const location = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = new URLSearchParams(location.search);
        let name = params.get("no");

        // 소모임 데이터 가져오기
        const response = await axios.get("http://crewz.asuscomm.com/api/somoim/list/" + name);
        if (response.status === 200) {
          const newRadios = response.data.list.map(somoim => ({
            no: somoim.no,
            moimno: somoim.moimno,
            memberid: somoim.memberid,
            title: somoim.title,
            content: somoim.content,
            loc: somoim.loc,
            photo: somoim.photo,
            total: somoim.total,
            jdate: somoim.jdate,
            isJoined: false,  // 가입 여부 초기값 설정
            isOwner: false    // 소모임 주최자 여부 초기값 설정
          }));

          // 각 소모임에 대한 가입 여부 확인
          for (const somoim of newRadios) {
            const joinRes = await axios.get("http://crewz.asuscomm.com/api/somoim/check", {
              params: { somoimno: somoim.no, id: localStorage.getItem("loginId") }
            });

            if (joinRes.status === 200 && joinRes.data.item !== null) {
              somoim.isJoined = true;
              if (somoim.memberid === localStorage.getItem("loginId"))
                somoim.isOwner = true;
            }
          }

          setRadios(newRadios);
        }
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
      }
    };

    fetchData();
  }, [location.search, token]);

  const join_btn = (no) => {
    alert(no);
    const params = new URLSearchParams(location.search);
    const name2 = params.get("no");
    const loginId = localStorage.getItem("loginId");

    axios.post("http://crewz.asuscomm.com/auth/somoim/join/" + no + "/" + loginId, {},
      { headers: { Authorization: token } })
      .then(function (res) {
        if (res.status === 200) {
          alert("가입 되었습니다.");
          window.location.reload();
        } else {

        }
      });
  }

  const out_btn = (no) => {
    const params = new URLSearchParams(location.search);
    const name2 = params.get("no");
    const loginId = localStorage.getItem("loginId");

    axios.delete("http://crewz.asuscomm.com/auth/somoim/out/" + no + "/" + loginId,
      { headers: { Authorization: token } })
      .then(function (res) {
        if (res.status === 200) {
          if (res.data.flag) {
            alert("탈퇴되었습니다.");
          } else {
            alert("탈퇴 실패");
          }
          window.location.reload();
        } else {
          alert(res.status);
        }
      });
  }
  const del_btn = (no) => {
    const params = new URLSearchParams(location.search);
    const name2 = params.get("no");
    

    axios.delete("http://crewz.asuscomm.com/auth/somoim/del/" + no, 
      { headers: { Authorization: token } })
      .then(function (res) {
        if (res.status === 200) {
          if (res.data.flag) {
            alert("삭제되었습니다.");
          } else {
            alert("삭제 실패");
          }
          window.location.reload();
        } else {
          alert(res.status);
        }
      });
  }



  return (
    <div>
      {radios.map((radio, idx) => (
        <Row className="somoim_div" style={{ border: '1px solid black' }} key={idx}>
          <Col xs={3} className="somoim_img">
            <Image src={"http://crewz.asuscomm.com/api/somoim/img/" + radio.moimno + "/" + radio.no + "/" + radio.photo} fluid style={{ borderRadius: '5px' }} />
          </Col>
          <Col xs={9} className="position-relative somoim-content">
            <h7>작성자 : {radio.memberid}</h7>
            <h4 className="fw-bold">{radio.title}</h4>
            <p>{radio.content}</p>
            <p>
              <span>정모일 : <SomoimDate>{radio.jdate}</SomoimDate></span>
              <br />
              <span>여행지 : {radio.loc}</span>
            </p>
            <Col xs={2} style={{ paddingBottom: '10px' }} className="position-absolute bottom-0 end-0">
              {!radio.isJoined && (
                <Button onClick={() => join_btn(radio.no)} variant="danger" className="somoim_join_btn shadow">가입하기</Button>
              )}
              {radio.isOwner && (
                <>
                  <SomoimEdit item={radio} />
                  <Button onClick={() => del_btn(radio.no)} variant="outline-danger" className="del shadow" style={{ marginLeft: '12px', marginTop: '10px', width: '60px', height: '33px' }}>삭제</Button>
                </>
              )}
              {radio.isJoined && !radio.isOwner && (
                <Button onClick={() => out_btn(radio.no)} variant="secondary" className="somoim_join_btn shadow">탈퇴하기</Button>
              )}
            </Col>
          </Col>
        </Row>
      ))}
      <SomoimAdd />
    </div>
  );
}

// 사용자 정의 날짜 컴포넌트
function SomoimDate({ children }) {
  // 실제 사용할 날짜 포맷팅 로직은 여기에 추가하세요
  const formattedDate = new Date(children).toLocaleDateString();
  return <span>{formattedDate}</span>;
}
