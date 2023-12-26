import {Button, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Join from "./Join";
import FindId from "./FindId";
import FindPwd from "./FindPwd";
import "./Login.css"

export default function Login({show, handleClose}) {
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const openSignUpModal = () => {
        setShowSignUpModal(true)
        handleClose();
    };
    const closeSignUpModal = () => setShowSignUpModal(false);

    /**
     * 아이디 찾기
     */
    const [showFindIdModal, setShowFindIdModal] = useState(false);
    const openFindIdModal = () => {
        setShowFindIdModal(true);
        handleClose();
    }
    const closeFindIdModal = () => setShowFindIdModal(false);

    /**
     *비밀번호 찾기
     */
    const [showFindPwdModal, setShowFindPwdModal] = useState(false);
    const openFindPwdModal = () => {
        setShowFindPwdModal(true);
        handleClose();
    }
    const closeFindPwdModal = () => setShowFindPwdModal(false);

    const [inputs, setInputs] = useState({id: '', pwd: ''});
    const {id, pwd} = inputs;
    const navigate = useNavigate();

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    /**
     * 아이디나 비밀번호를 입력하지 않았을 때 에러메세지 띄움
     */
    const [errorMessage, setErrorMessage] = useState('');

    const signIn = () => {
        if (!id || !pwd) {
            setErrorMessage("아이디와 비밀번호 모두 입력해주세요.");
            return;
        }

        axios.post('http://crewz.asuscomm.com/api/member/login', {}, {params: {id: id, pwd: pwd}})
            .then(function (res) {
                if (res.status === 200) {
                    if (res.data.flag) {
                        handleClose();
                        localStorage.setItem("loginId", id);
                        localStorage.setItem("token", res.data.token);

                        navigate('/');
                        window.location.reload();
                    } else {
                        alert("로그인에 실패하였습니다.");
                    }
                } else {
                    alert("error:" + res.status);
                }
            })
            .catch(function (error){
                setErrorMessage("존재하지 않는 계정입니다.");
            })
    }

    /**
     * 모달창 닫으면 입력한 값 자동 초기화
     */
    const clearInputs = () => {
        setInputs({ id: '', pwd: '' });
        setErrorMessage('');
    };

    useEffect(() => {
        if (!show) {
            clearInputs();
        }
    }, [show])

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>로그인</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="form-el">
                        <label htmlFor="id">아이디</label> <br/>
                        <input type="text" name="id" value={id} onChange={onChange}/>
                    </div>

                    <div className="form-el">
                        <label htmlFor="pwd">비밀번호</label> <br/>
                        <input type="password" id="pwd" name="pwd" value={pwd} onChange={onChange}/>
                    </div>

                    {errorMessage && (
                        <p id="error-message">
                            {errorMessage}
                        </p>)}
                </Modal.Body>

                <Modal.Footer id="footer" className="d-flex justify-content-center align-items-center">
                    <Button variant="danger" onClick={signIn}>로그인</Button>

                    <div>
                        <a href="#" onClick={openSignUpModal}>회원가입</a> | <a href="#"
                                                                            onClick={openFindIdModal}>아이디찾기</a> | <a
                        href="#" onClick={openFindPwdModal}>비밀번호찾기</a>
                    </div>
                </Modal.Footer>

            </Modal>

            <Join show={showSignUpModal} handleClose={closeSignUpModal}/>
            <FindId show={showFindIdModal} handleClose={closeFindIdModal}/>
            <FindPwd show={showFindPwdModal} handleClose={closeFindPwdModal}/>
        </div>
    )
}