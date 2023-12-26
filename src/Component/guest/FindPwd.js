import {useState} from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Join from "./Join";
import Login from "./Login";
import FindId from "./FindId";

export default function FindPwd({show, handleClose}) {

    const [inputs, setInputs] = useState({id: '', tel: ''});
    const {id, tel} = inputs;
    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const findPwd = () => {
        axios.post('http://crewz.asuscomm.com/api/member/find/pwd', {}, {params: {id: id, tel: tel}})
            .then(function (res) {
                if (res.status === 200) {
                    if (res.data.result !== 'null') {
                        alert('회원님의 비밀번호는 ' + res.data.result + '입니다.');
                    }else{
                        alert('비밀번호를 찾을 수 없습니다.');
                    }
                } else {
                    alert('error:' + res.status);
                }
            })
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>비밀번호 찾기</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="form-el">
                        <label htmlFor="id">아이디</label> <br/>
                        <input type="text" name="id" value={id} onChange={onChange}/>
                    </div>

                    <div className="form-el">
                        <label htmlFor="tel">전화번호</label> <br/>
                        <input type="text" id="tel" name="tel" value={tel} onChange={onChange}/>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={findPwd}>찾기</Button>

                    <Join/>
                    <Login/>
                    <FindId/>
                </Modal.Footer>
            </Modal>
        </>
    );
}


