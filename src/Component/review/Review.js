import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button, Badge, Modal } from 'react-bootstrap';
import ReviewAddModal from './ReviewAddModal.js';
import ReviewEditModal from './ReviewEditModal.js';
import Comment from '../comments/Comment.js'
import axios from "axios";
import { useLocation } from "react-router-dom";

const Review = () => {
  const [join, setJoin] = useState(false);
  const [showAddModal, setAddShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [memberInfom, setMemberInfo] = useState({});
  const [id, setId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalShow(true);
  };
  const location = useLocation();
  const [radios, setRadios] = useState([]);
  useEffect(async () => {
    axios.get("http://crewz.asuscomm.com/api/somoim/review/check/" + localStorage.getItem("loginId"))
    .then(function (res) {
      if (res.status === 200) {
        if (res.data.flag === true)
          setJoin(true);
        else {
          console.log("소모임 가입한적 없음");
        }
      } else {

      }
    });
    try {
      const params = new URLSearchParams(location.search);
      let no = params.get("no");

      const res = await axios.get('http://crewz.asuscomm.com/api/review/list', { params: { "no": parseInt(no, 10) } });
      if (res.status === 200) {
        console.log(res.data.list === null ? "yes" : "no");
        if (res.data.list !== null) {
          const item = res.data.list.map((review) => ({
            no: review.no,
            memberid: review.memberid,
            moimno: review.moimno,
            somoimno: review.somoimno,
            title: review.title,
            content: review.content,
            photo1: review.photo1,
            photo2: review.photo2,
            photo3: review.photo3,
            mdate: review.mdate,
            name: review.name,
            isOwner: false    // 소모임 주최자 여부 초기값 설정
          }));

          const memberid = localStorage.getItem("loginId");
          const moimno = res.data.list[0].moimno;

          setMemberInfo({
            memberid: memberid,
            moimno: moimno,
          });

         
          // 각 리뷰에 대한 가입 여부 확인
          for (const review of item) {
            if (review.memberid === localStorage.getItem("loginId"))
              review.isOwner = true;
          }
          setRadios(item);
        }
      } else {
        setMemberInfo({
          memberid: localStorage.getItem("loginId"),
          moimno: no,
        });
      }
    } catch (error) {
      console.error("데이터를 불러오는 중 오류 발생:", error);
    }
  }, [location.search]);


  return (
    <div>
      {join && (
        <div className="fixed-bottom d-flex justify-content-end" style={{ paddingBottom: '20px', paddingRight: '10%' }}>
          <div onClick={() => setAddShowModal(true)}>
            <img src="/img/plusbotton.png" style={{ width: '60px', height: '60px' }} />
          </div>
          <ReviewAddModal showAddModal={showAddModal} handleClose={() => setAddShowModal(false)} info={memberInfom} />
        </div>
      )}

      {radios.length === 0 ? (
        <Row ></Row>
      ) : radios.map((item, idx) => (
        <Row >
          <Col xs={1}></Col>
          <Col lg={10} >
            <article>
              <header className="mb-4 text-start">
                <div className="d-flex align-items-start">
                  <Image src={"http://crewz.asuscomm.com/api/member/img?id=" + item.memberid} roundedCircle alt="Profile picture" style={{ width: '50px', height: '50px' }} />
                  <h4 className="fw-bolder mb-1 ml-3" style={{ marginTop: '10px', marginLeft: '10px' }}>{item.memberid}</h4>
                </div>
                <h1 className="fw-bolder mb-1" style={{ marginTop: '10px' }}>{item.title}</h1>
                <div className="text-muted fst-italic mb-2">Posted on {item.mdate}</div>
                <Badge bg="secondary" href="#!">{item.name}</Badge>
              </header>

              <section className="mb-5 text-start">
                <p className="fs-5 mb-4">{item.content}</p>
                <div id="wrp" style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                  <Image src={`http://crewz.asuscomm.com/api/review/img/${item.moimno}/${item.somoimno}/${item.no}/${item.photo1}`} rounded alt="대체 텍스트" style={{ width: '15%', height: 'auto', marginRight: '2%' }} onClick={() => handleImageClick(item.photo1)} />
                  <Image src={`http://crewz.asuscomm.com/api/review/img/${item.moimno}/${item.somoimno}/${item.no}/${item.photo2}`} rounded alt="대체 텍스트" style={{ width: '15%', height: 'auto', marginRight: '2%' }} onClick={() => handleImageClick(item.photo2)} />
                  <Image src={`http://crewz.asuscomm.com/api/review/img/${item.moimno}/${item.somoimno}/${item.no}/${item.photo3}`} rounded alt="대체 텍스트" style={{ width: '15%', height: 'auto', marginRight: '2%' }} onClick={() => handleImageClick(item.photo3)} />

                </div>
              </section>
            </article>

            {item.isOwner &&(
              <div className="text-end" style={{ marginTop: '-2rem' }}>
              <Button variant="outline-success" className="edit-review-btn" onClick={() => setShowEditModal(true)} style={{ marginRight: '10px' }}>글수정</Button>
              <ReviewEditModal showEditModal={showEditModal} handleClose={() => setShowEditModal(false)} />
              <Button variant="outline-danger" className="edit-delete-btn">글삭제</Button>
            </div>
            )}
            <hr style={{ border: '3px solid black' }} />

          </Col>
          <Col xs={1}></Col>
        </Row>
      ))}




      {/* 사진클릭시 확대모달창 */}
      <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
        <Modal.Body>
          <img src={selectedImage} className="img-fluid" alt="Large Preview" />
        </Modal.Body>
      </Modal>

      <script src="/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="/js/review/scripts.js"></script>
    </div >
  )
};

export default Review;