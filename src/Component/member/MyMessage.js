import {Button, Form, Table} from "react-bootstrap";
import {useState} from "react";
import Modal from "react-bootstrap/Modal";


export default function MyMessage() {
    const [selectPage, setSelectPage] = useState('get');
    const changePage = (page) => {
        setSelectPage(page);
    }

    const getMessage = () => {
        changePage('get')
    }

    const sendMessage = () => {
        changePage('send')
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div>
                <a onClick={getMessage}>받은 메세지</a> | <a onClick={sendMessage}>보낸 메세지</a>
            </div>

            <br/>

            {selectPage === 'get' && (
                <div>
                    <Table hover>
                        <thead>
                        <tr>
                            <th>보낸사람</th>
                            <th>받은시간</th>
                            <th>제목</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>크루원</td>
                            <td>23.12.20</td>
                            <td>크루 모임시간 안내합니다.</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            )}

            {selectPage === 'send' && (
                <div>
                    <Table hover>
                        <thead>
                        <tr>
                            <th>받는사람</th>
                            <th>보낸시간</th>
                            <th>제목</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>크루장</td>
                            <td>23.12.20</td>
                            <td>크루 모임시간 안내합니다.</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            )}

            <div className="container-fluid d-flex justify-content-end">
                <Button variant="danger" onClick={handleShow}>메세지 보내기</Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>메세지 보내기</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>받는 사람</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>제목</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>내용</Form.Label>
                            <Form.Control as="textarea" rows={2} style={{resize: "none"}}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" variant="danger" onClick={handleClose}>
                        보내기
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}


