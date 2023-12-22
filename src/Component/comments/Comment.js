import React, { useState } from 'react';
import { Card, Form, Button, OverlayTrigger, Tooltip, Image } from 'react-bootstrap';

const Comment = () => {
  const [comment, setComment] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editedComment, setEditedComment] = useState('');
  

  const handleCommentSubmit = (e) => {
    e.preventDefault();
  };
  const handleEditClick = () => {
    setEditMode(true);
    setEditedComment(comment);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedComment('');
  };

  const handleSaveEdit = () => {
    // 수정된 댓글 저장 로직 (서버 통신 없이 프론트엔드에서만 처리)
    // ... (이 부분은 서버와의 통신이 없는 예시이므로 간단히 처리)
    setComment(editedComment);
    setEditMode(false);
    setEditedComment('');
  };

  // 댓글 수정삭제 툴팁
  const renderEditTooltip = (props) => (
    <Tooltip id="edit-tooltip" {...props}>
      댓글 수정
    </Tooltip>
  );

  const renderDelTooltip = (props) => (
    <Tooltip id="del-tooltip" {...props}>
      댓글 삭제
    </Tooltip>
  );

  return (
    
    <section className="mb-5" style={{ marginTop: '-30px'}} >
      <Card bg="light">
        <Card.Body>
          <Form className="mb-4 d-flex justify-content-between align-items-stretch" onSubmit={handleCommentSubmit}>
            <Form.Control as="textarea" rows="3" placeholder="Join the discussion and leave a comment!" style={{ width: '85%', resize: 'none' }} value={comment} onChange={(e) => setComment(e.target.value)} />
              <Button variant="primary" style={{ width: '14%', backgroundColor: '#babbbc', borderColor: '#babbbc' }} type="submit">등록</Button>
            </Form>

        <div className="d-flex mb-4">

            <div className="flex-shrink-0">
              <Image className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." />
            </div>

            <div className="ms-3">
                  <div className="d-flex align-items-center">
                    <div className="fw-bold">Commenter Name1</div>

                        {editMode ? (
                        <>
                          <Button variant="outline-secondary" className="edit-comment-btn" style={{ padding: '2px 2px', marginTop: '-5px', marginLeft: '10px', border: 'none' }}
                            onClick={handleSaveEdit}>
                            수정완료
                          </Button>

                          <Button variant="outline-danger" className="delete-comment-btn" style={{ padding: '2px 2px', marginTop: '-5px', marginLeft: '5px', border: 'none' }}
                            onClick={handleCancelEdit}>
                            취소
                          </Button>
                          </>
                                    ) : (
                          <>
                          <OverlayTrigger placement="top" overlay={renderEditTooltip}>
                            <Button variant='outline-secondary' className="edit-comment-btn" style={{ padding: '2px 2px', marginTop: '-8px', marginLeft:'5px', border: 'none' }}
                              onClick={handleEditClick}>
                                <Image src="/img/edit_button.png" alt="edit" width="15" height="15" />
                            </Button>
                          </OverlayTrigger>

                          <OverlayTrigger placement="top" overlay={renderDelTooltip}>
                            <Button variant='outline-danger' className="delete-comment-btn" style={{ padding: '2px 2px', marginTop: '-7px', border: 'none' }}>
                              <Image src="/img/delete_button.png" alt="delete" width="15" height="15" />
                            </Button>
                          </OverlayTrigger>
                          </>
                                    )}
                        
                  </div>
                      
                          {editMode ? (
                            <Form.Control as="textarea" rows="3" style={{ width: '35vw', resize: 'none' }} value={editedComment}
                              onChange={(e) => setEditedComment(e.target.value)}/>
                                      ) : (                
                      <div className="comment-content" style={{ textAlign: 'left' }}>댓글내용</div>
                                      )} 
                    
            </div>  
        </div>
        </Card.Body>
      </Card>
    </section>

  );
};

export default Comment;
