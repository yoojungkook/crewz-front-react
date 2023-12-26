import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button, Badge, Modal } from 'react-bootstrap';
import ReviewAddModal from './ReviewAddModal.js';
import ReviewEditModal from './ReviewEditModal.js';
import Comment from '../comments/Comment.js'
import axios from "axios";
import { useLocation } from "react-router-dom";

const Review = () => {

  const [showAddModal, setAddShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  // const [memberInfom, setMemberInfo] = useState({memberid: "", somoimno: "", categoryName: "", categoryNumber: ""});

  const [memberInfom, setMemberInfo] = useState({});
  const [id, setId] = useState(null);

  {/* 사진클릭시 확대모달창 */ }
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    // Open the modal
    setModalShow(true);
  };

  const location = useLocation();
  const [radios, setRadios] = useState([]);
  useEffect(() => {

    const params = new URLSearchParams(location.search);
    let no = params.get("no");

    axios.get('http://localhost/api/review/list', { params: { "no": parseInt(no, 10) } })
      .then(function (res) {
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
              name: review.name
            }));

            const memberid = localStorage.getItem("loginId");
            const moimno = res.data.list[0].moimno;

            setMemberInfo({
              memberid: memberid,
              moimno: moimno,
            });

            setRadios(item);
          } else {
            setMemberInfo({
              memberid: localStorage.getItem("loginId"),
              moimno: no,
            });
          }
        } else {
          setRadios(null);
        }
      })

    if(localStorage.getItem("loginId") !== null) {
      axios.post('http://localhost/api/review/mylist', {}, { params: { moimno: no, memberid: localStorage.getItem("loginId") } })
        .then(function (res) {
          if (res.status === 200) {
            console.log("null 여부: " + res.data.list === null ? "null" : "no");
            if(res.data.list === null) {
              setId(null);
            } else {
              setId(localStorage.getItem("loginId"));
            }
          }
        });
    }

    console.log(memberInfom)
  }, [])

  return (
    <div>
      {id !== null ? (
        <div className="fixed-bottom d-flex justify-content-end" style={{ paddingBottom: '20px', paddingRight: '10%' }}>
          <div onClick={() => setAddShowModal(true)}>
            <img src="/img/plusbotton.png" style={{ width: '60px', height: '60px' }} />
          </div>
          <ReviewAddModal showAddModal={showAddModal} handleClose={() => setAddShowModal(false)} info={memberInfom} />
        </div>
      ) : (<div></div>)}

      {/* <Container className="mt-5"> */}
      {radios.length === 0 ? (
        <Row ></Row>
      ) : radios.map((item, idx) => (
        <Row >
          <Col xs={1}></Col>
          <Col lg={10} >
            <article>
              <header className="mb-4 text-start">
                <div className="d-flex align-items-start">
                  <Image src={"http://localhost/api/member/img?id=" + item.memberid} roundedCircle alt="Profile picture" style={{ width: '50px', height: '50px' }} />
                  <h4 className="fw-bolder mb-1 ml-3" style={{ marginTop: '10px', marginLeft: '10px' }}>{item.memberid}</h4>
                </div>
                <h1 className="fw-bolder mb-1" style={{ marginTop: '10px' }}>{item.title}</h1>
                <div className="text-muted fst-italic mb-2">Posted on {item.mdate}</div>
                <Badge bg="secondary" href="#!">{item.name}</Badge>
              </header>

              <section className="mb-5 text-start">
                <p className="fs-5 mb-4">{item.content}</p>
                <div id="wrp" style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                  <Image src={`http://localhost/api/review/img/${item.moimno}/${item.somoimno}/${item.no}/${item.photo1}`} rounded alt="대체 텍스트" style={{ width: '15%', height: 'auto', marginRight: '2%' }} onClick={() => handleImageClick(item.photo1)} />
                  <Image src={`http://localhost/api/review/img/${item.moimno}/${item.somoimno}/${item.no}/${item.photo2}`} rounded alt="대체 텍스트" style={{ width: '15%', height: 'auto', marginRight: '2%' }} onClick={() => handleImageClick(item.photo2)} />
                  <Image src={`http://localhost/api/review/img/${item.moimno}/${item.somoimno}/${item.no}/${item.photo3}`} rounded alt="대체 텍스트" style={{ width: '15%', height: 'auto', marginRight: '2%' }} onClick={() => handleImageClick(item.photo3)} />
                  {/* <img src={imageSrc(item, 1)} rounded alt="대체 텍스트" style={{ width: '15%', height: 'auto', marginRight: '2%' }} onClick={() => handleImageClick(item.photo1)} />
                  <img src={imageSrc(item, 2)} rounded alt="대체 텍스트" style={{ width: '15%', height: 'auto', marginRight: '2%' }} onClick={() => handleImageClick(item.photo2)} />
                  <img src={imageSrc(item, 3)} rounded alt="대체 텍스트" style={{ width: '15%', height: 'auto', marginRight: '2%' }} onClick={() => handleImageClick(item.photo3)} /> */}
                </div>
              </section>
            </article>

            {/* <Comment /> */}

            {item.memberid === localStorage.getItem("loginId") ? (
              <div className="text-end" style={{ marginTop: '-2rem' }}>
                <Button variant="outline-success" className="edit-review-btn" onClick={() => setShowEditModal(true)} style={{ marginRight: '10px' }}>글수정</Button>
                <ReviewEditModal showEditModal={showEditModal} handleClose={() => setShowEditModal(false)} />
                <Button variant="outline-danger" className="edit-delete-btn">글삭제</Button>
              </div>
            ) : (
              <div></div>
            )}
            <hr style={{ border: '3px solid black' }} />
            {/* <br />
            <br /> */}
          </Col>
          <Col xs={1}></Col>
        </Row>
      ))}
      {/* </Container> */}



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