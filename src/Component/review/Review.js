import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button, Badge, Modal } from 'react-bootstrap';
import ReviewAddModal from './ReviewAddModal.js';
import ReviewEditModal from './ReviewEditModal.js';
import Comment from '../comments/Comment.js'
import axios from "axios";

const Review = () => {


  const [showAddModal, setAddShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  {/* 사진클릭시 확대모달창 */ }
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    // Open the modal
    setModalShow(true);
  };

  const handleDeleteButtonClick = () => {
    const confirmDelete = window.confirm("정말로 글을 삭제하시겠습니까?");
    
    if (confirmDelete) {
      // 여기에 삭제 로직을 추가하세요.
      // 삭제 로직을 추가한 후, 필요에 따라 서버에 삭제 요청을 보내거나,
      // 상태를 업데이트하여 화면에서 해당 항목을 제거할 수 있습니다.
      console.log("글을 삭제합니다.");
    } else {
      console.log("글 삭제가 취소되었습니다.");
    }
  };


  return (
    <div>
      <div className="fixed-bottom d-flex justify-content-end" style={{ paddingBottom: '20px', paddingRight: '10%' }}>
        <div onClick={() => setAddShowModal(true)}>
          <img src="/img/plusbotton.png" style={{ width: '60px', height: '60px' }} />
        </div>
        <ReviewAddModal showAddModal={showAddModal} handleClose={() => setAddShowModal(false)} />
      </div>

      {/* <Container className="mt-5"> */}
      <Row >
      <Col xs={1}></Col>
      <Col lg={10}>
        <article>
          <header className="mb-4 text-start">
            <div className="d-flex align-items-start">
              <Image src="/img/풍경1.jpg" roundedCircle alt="Profile picture" style={{ width: '50px', height: '50px' }} />
              <h4 className="fw-bolder mb-1 ml-3" style={{ marginTop: '10px', marginLeft: '10px' }}>Username</h4>
            </div>
            <h1 className="fw-bolder mb-1" style={{ marginTop: '10px' }}>모임 후기!</h1>
            <div className="text-muted fst-italic mb-2">Posted on January 1, 2023</div>
            <Badge bg="secondary" href="#!">헬스</Badge>
          </header>

          <section className="mb-5 text-start">
            <p className="fs-5 mb-4">testcontent</p>
            <div id="wrp" style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
              <Image src="/img/풍경1.jpg" rounded alt="대체 텍스트" style={{ width: '33%', height: 'auto', marginRight: '2%' }} onClick={() => handleImageClick("/img/풍경1.jpg")} />
              <Image src="/img/풍경1.jpg" rounded alt="대체 텍스트" style={{ width: '33%', height: 'auto', marginRight: '2%' }} onClick={() => handleImageClick("/img/풍경1.jpg")} />
              <Image src="/img/풍경1.jpg" rounded alt="대체 텍스트" style={{ width: '33%', height: 'auto', marginRight: '2%' }} onClick={() => handleImageClick("/img/풍경1.jpg")} />
            </div>
          </section>
        </article>


        <Comment />

        <div className="text-end" style={{ marginTop: '-2rem' }}>
          <Button variant="outline-success" className="edit-review-btn" onClick={() => setShowEditModal(true)} style={{ marginRight: '10px' }}>글수정</Button>
          <ReviewEditModal showEditModal={showEditModal} handleClose={() => setShowEditModal(false)} />

          <Button variant="outline-danger" className="edit-delete-btn" onClick={() => handleDeleteButtonClick()} >글삭제</Button>
          
        </div>
        <br />
        <br />
      </Col>
      <Col xs={1}></Col>
    </Row>
      {/* </Container> */ }



  {/* 사진클릭시 확대모달창 */ }
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