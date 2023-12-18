import React, { useState } from 'react';
import { Modal, Button, Form, Image, Col, Row } from 'react-bootstrap';

const ReviewAddModal = ({ showAddModal, handleClose }) => {

  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

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
    console.log('Category:', category);
    console.log('Title:', title);
    console.log('Content:', content);
    // Add your logic to send the form data
    handleClose(); // Close the modal after submission
  };


  const handleFileChange = (e, setFile) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
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
    <Modal show={showAddModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="fs-8 fw-bold">후기 작성</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">카테고리</Form.Label>
            <Form.Select onChange={handleCategoryChange} value={category}>
              <option selected>카테고리를 선택하세요</option>
              <option value="카테고리1">카테고리1</option>
              <option value="카테고리2">카테고리2</option>
              <option value="카테고리3">카테고리3</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">제목</Form.Label>
            <Form.Control type="text" placeholder="제목을 입력하세요" onChange={handleTitleChange} value={title} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">내용</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="내용을 입력하세요" style={{ width: '100%', resize: 'none' }} onChange={handleContentChange} value={content} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">사진 업로드</Form.Label>


            {/* 업로드 칸 1 */}
            <Form.Control type="file" id="uploadFile1" onChange={(e) => handleFileChange(e, setFile1)} />
            {file1 && (
              <>
                <Button variant="outline-secondary" onClick={() => handleFileReset(setFile1)} style={{ marginTop: '1rem' }}>
                  초기화
                </Button>
                <Image src={URL.createObjectURL(file1)} alt="preview" style={{ width: '200px', height: 'auto', marginTop: '1rem' }} />
              </>
            )}

            {/* 업로드 칸 2 */}
            <Form.Control type="file" id="uploadFile2" onChange={(e) => handleFileChange(e, setFile2)} style={{ marginTop: '1rem' }} />
            {file2 && (
              <>
                <Button variant="outline-secondary" onClick={() => handleFileReset(setFile2)} style={{ marginTop: '1rem' }}>
                  초기화
                </Button>
                <Image src={URL.createObjectURL(file2)} alt="preview" style={{ width: '200px', height: 'auto', marginTop: '1rem' }} />
              </>
            )}

            {/* 업로드 칸 3 */}
            <Form.Control type="file" id="uploadFile3" onChange={(e) => handleFileChange(e, setFile3)} style={{ marginTop: '1rem' }} />
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

