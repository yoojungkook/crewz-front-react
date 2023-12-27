import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Image, Col, Row } from 'react-bootstrap';
import axios from "axios";

const ReviewAddModal = ({ showAddModal, handleClose, info }) => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [somoim, setSomoim] = useState([]);

  const handleModalOpen = () => {
    console.log(info);
    // console.log("list 출력!")
    axios.get('http://crewz.asuscomm.com/api/somoim/mysomoim/' + localStorage.getItem("loginId"))
    .then(function(res) {
      if(res.status === 200) {
        // console.log(res.data.list);
        console.log("flag:"  + res.data.flag);
        const setItem = res.data.list.map(item => ({
          no: item.no,
          title: item.title
        }))

        setSomoim(setItem);
      }
    });
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };


  const handleSubmit = () => {
    // Handle form submission logic
    const formData = new FormData();
    formData.append("somoimno", category);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("memberid", info.memberid);
    formData.append("mf1", file1);
    formData.append("mf2", file2);
    formData.append("mf3", file3);
  
    // 폼 데이터 내용을 콘솔에 출력
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    axios.post("http://crewz.asuscomm.com/api/review/add", formData, {headers: {'Content-Type': 'multipart/form-data'}})
    .then(function(res) {
      if(res.status === 200) {
        if(res.data.flag) {
          console.log(res.data.msg);
        } else {
          console.log("실패!");
        }
      }
    })


    // Add your logic to send the form data
    handleClose(); // Close the modal after submission
  };


  const handleFileChange1 = (e) => {
    const selectedFile1 = e.target.files[0];
    setFile1(selectedFile1);
  };

  const handleFileChange2 = (e) => {
    const selectedFile2 = e.target.files[0];
    setFile2(selectedFile2);
  };

  const handleFileChange3 = (e) => {
    const selectedFile3 = e.target.files[0];
    setFile3(selectedFile3);
  };

  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);

  const handleFileReset = (setFile) => {
    setFile(null);

    // 파일 선택 칸 초기화
    const fileInput = document.getElementById(setFile === setFile1 ? 'uploadFile1' : setFile === setFile2 ? 'uploadFile2' : 'uploadFile3');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  return (
    <Modal show={showAddModal} onShow={handleModalOpen} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="fs-8 fw-bold">후기 작성</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">내가 참여한 소모임</Form.Label>
            <Form.Select onChange={handleCategoryChange} value={category}>
              <option selected>카테고리를 선택하세요</option>
              {somoim.map((item, idx) => (
                <option value={item.no}>{item.title}</option>
              ))}
            </Form.Select>
            <p>{info.categoryName}</p>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">제목</Form.Label>
            <Form.Control id="title" type="text" placeholder="제목을 입력하세요" onChange={handleTitleChange} value={title} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">내용</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="내용을 입력하세요" style={{width: '100%', height:"auto", resize: 'none' }} onChange={handleContentChange} value={content} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">사진 업로드</Form.Label>


            {/* 업로드 칸 1 */}
            <Form.Control type="file" id="uploadFile1" onChange={(e) => handleFileChange1(e)} />
            {file1 && (
              <>
                <Button variant="outline-secondary" onClick={() => handleFileReset(setFile1)} style={{ marginTop: '1rem' }}>
                  초기화
                </Button>
                <Image src={URL.createObjectURL(file1)} alt="preview" style={{ width: '200px', height: 'auto', marginTop: '1rem' }} />
              </>
            )}

            {/* 업로드 칸 2 */}
            <Form.Control type="file" id="uploadFile2" onChange={(e) => handleFileChange2(e)} style={{ marginTop: '1rem' }} />
            {file2 && (
              <>
                <Button variant="outline-secondary" onClick={() => handleFileReset(setFile2)} style={{ marginTop: '1rem' }}>
                  초기화
                </Button>
                <Image src={URL.createObjectURL(file2)} alt="preview" style={{ width: '200px', height: 'auto', marginTop: '1rem' }} />
              </>
            )}

            {/* 업로드 칸 3 */}
            <Form.Control type="file" id="uploadFile3" onChange={(e) => handleFileChange3(e)} style={{ marginTop: '1rem' }} />
            {file3 && (
              <>
                <Button variant="outline-secondary" onClick={() => handleFileReset(setFile3)} style={{ marginTop: '1rem' }}>
                  초기화
                </Button>
                <Image src={URL.createObjectURL(file3)} alt="preview" style={{ width: '200px', height: 'auto', marginTop: '1rem' }} />
              </>
            )}
          </Form.Group>

        </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          닫기
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          작성완료
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReviewAddModal;

