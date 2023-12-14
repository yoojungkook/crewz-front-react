import React, { useState } from 'react';
import { Modal, Button, Form} from 'react-bootstrap';

const ReviewEditModal = ({ showEditModal, handleClose }) => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleFileChange = (e) => {
    // Handle file change logic
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // You can add logic to display a preview if needed
  };

  const handleSubmit = () => {
    // Handle form submission logic
    console.log('Category:', category);
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('File:', file);
    // Add your logic to send the form data
    handleClose(); // Close the modal after submission
  };

  return (
    <Modal show={showEditModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="fs-8 fw-bold">후기 글 수정</Modal.Title>
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
            <Form.Control type="file" onChange={handleFileChange} style={{ marginBottom: '1rem' }} />
            <Form.Control type="file" onChange={handleFileChange} style={{ marginBottom: '1rem', marginTop: '1rem' }} />
            <Form.Control type="file" onChange={handleFileChange} style={{ marginBottom: '1rem', marginTop: '1rem' }} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          닫기
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          수정완료
        </Button>
      </Modal.Footer>
    </Modal>
  );
};


export default ReviewEditModal;