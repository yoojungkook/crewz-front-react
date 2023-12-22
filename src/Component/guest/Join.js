import {Button, Modal} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";

export default function Join({show, handleClose}) {

    /**
     * 초기값
     */
    const [inputs, setInputs] = useState({id: '', pwd: '', pwd2: '', name: '', tel: '', birth: ''});
    const {id, pwd, pwd2, name, tel, birth} = inputs;

    /**
     * 유효성 검사 메세지
     */
    const [idMessage, setIdMessage] = useState('');
    const [pwdMessage, setCheckPwdMessage] = useState('');
    const [pwd2Message, setCheckPwd2Message] = useState('');
    const [nameMessage, setNameMessage] = useState('');
    const [telMessage, setTelMessage] = useState('');
    const [birthMessage, setBirthMessage] = useState('');

    /**
     * 유효성 검사 true or false
     */
    const [checkId, setCheckId] = useState(false);
    const [checkPwd, setCheckPwd] = useState(false);
    const [checkPwd2, setCheckPwd2] = useState(false);
    const [checkName, setCheckName] = useState(false);
    const [checkTel, setCheckTel] = useState(false);
    const [checkBirth, setCheckBirth] = useState(false);

    const onInputId = (e) => {
        let id = e.target.value;

        if (id === null || id === undefined) {
            setIdMessage("")
        } else if (!(new RegExp("^.(?=.*[a-z])(?=.*[0-9]).{4,19}$").test(id))) {
            setIdMessage("영문과 숫자를 포함해 5~20자 내로 입력해 주세요.");
            setCheckId(false);
        } else {
            setIdMessage("");
            setCheckId(true)
        }
    }

    /**
     * 정규식
     */
    const onInputPwd = (e) => {
        let pwd = e.target.value;

        if (!(new RegExp("^.(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{7,15}$").test(pwd))) {
            setCheckPwdMessage("영문, 숫자, 특수문자를 포함해 8자~16자 이내로 입력해 주세요.");
            setCheckPwd(false);
        } else {
            setCheckPwdMessage("");
            setCheckPwd(true);
        }
    }

    const onInputPwd2 = (e) => {
        let pwd2 = e.target.value;

        if (pwd !== pwd2) {
            setCheckPwd2Message("비밀번호가 일치하지 않습니다.");
            setCheckPwd2(false);
        } else {
            setCheckPwd2Message("")
            setCheckPwd2(true);
        }
    }

    const onInputName = (e) => {
        let name = e.target.value;

        if (!(new RegExp("^[가-힣a-zA-Z]+$").test(name))) {
            setNameMessage("한글 또는 영어만 입력해 주세요.");
            setCheckName(false)
        } else {
            setNameMessage('');
            setCheckName(true);
        }
    }

    const onInputTel = (e) => {
        let tel = e.target.value;

        if (!(new RegExp("^(010)[0-9]{4}[0-9]{4}$").test(tel))) {
            setTelMessage("01012345678 형식으로 입력해 주세요.");
            setCheckTel(false)
        } else {
            setTelMessage("");
            setCheckTel(true);
        }
    }

    const onInputBirth = (e) => {
        const birth = e.target.value;

        if (birth.value) {
            setBirthMessage("생일을 선택해 주세요.");
            setCheckBirth(false);
        } else {
            setBirthMessage("");
            setCheckBirth(true);
        }
    };

    /**
     * 버튼 활성화 여부 결정 변수
     */
    let validButton = checkId && checkPwd && checkPwd2 && checkName && checkTel && checkBirth;

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    /**
     * 회원가입
     */
    const signUp = () => {
        axios.post('http://crewz.asuscomm.com/api/member/join', {}, {
            params: {
                id: id,
                pwd: pwd,
                name: name,
                tel: tel,
                birth: birth,
                site: "HOME"
            }
        })
            .then(function (res) {
                if (res.status === 200) {
                    alert("크루즈에 오신 것을 환영합니다.");
                } else {
                    alert("error:" + res.status);
                }
            });
    }

    return (
        <Modal show={show} onHide={handleClose} className="">
            <Modal.Header>
                <Modal.Title>회원가입</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="main-signup">
                    <div className="form-el">
                        <label htmlFor="id">아이디</label> <br/>
                        <input type="text" name="id" value={id} onChange={onChange} onInput={onInputId}/>
                        <p className="message"> {idMessage} </p>
                    </div>

                    <div className="form-el">
                        <label htmlFor="pwd">비밀번호</label> <br/>
                        <input type="password" id="pwd" name="pwd" value={pwd} onChange={onChange}
                               onInput={onInputPwd}/>
                        <p className="message">{pwdMessage}</p>
                    </div>

                    <div className="form-el">
                        <label htmlFor="pwd2">비밀번호 확인</label> <br/>
                        <input type="password" id="pwd2" name="pwd2" value={pwd2} onChange={onChange}
                               onInput={onInputPwd2}/>
                        <p className="message">{pwd2Message}</p>
                    </div>

                    <div className="form-el">
                        <label htmlFor="name">이름</label> <br/>
                        <input type="text" id="name" name="name" value={name} onChange={onChange}
                               onInput={onInputName}/>
                        <p className="message">{nameMessage}</p>
                    </div>

                    <div className="form-el">
                        <label htmlFor="tel">번호</label> <br/>
                        <input type="text" id="tel" name="tel" value={tel} onChange={onChange}
                               onInput={onInputTel}/>
                        <p className="message">{telMessage}</p>
                    </div>

                    <div className="form-el">
                        <label htmlFor="birth">생일</label> <br/>
                        <input type="date" id="birth" name="birth" value={birth} onChange={onChange}
                               onInput={onInputBirth}/>
                        <p className="message">{birthMessage}</p>
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="danger" onClick={signUp} disabled={!validButton}>가입</Button>
            </Modal.Footer>
        </Modal>
    )
}


