import {Button, Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import "./MyPage.css"
import axios from "axios";

export default function MyPage() {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem("loginId");
    const pwdNew = document.getElementById("pwdNew");
    const tel = document.getElementById("tel");

    /**
     * 프로필 사진 업로드
     */
    const onChangeImg = e => {
        const formData = new FormData();//파일 객체
        const file = e.target.files[0];//선택된 파일은 e.target.files배열에 담긴다

        if (file) {
            formData.append('mf', file);//폼데이터에 전달할 값 추가
            formData.append('id', id);
        }
        axios.put('http://crewz.asuscomm.com/auth/member/edit/profile', formData, {
            headers: {
                Authorization: token,
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (res) {
                if (res.status === 200) {
                    console.log("프로필 사진이 업로드 되었습니다.");
                    window.location.reload();
                } else {
                    console.log("error:" + res.status);
                }
            });
    };

    /**
     * 회원 정보 조회
     */
    const [member, setMember] = useState({});
    useEffect(() => {
        axios.post("http://crewz.asuscomm.com/auth/member/info/" + id, {}, {
            headers: {
                Authorization: token
            }
        })
            .then(function (res) {
                if (res.status === 200) {
                    if (res.data.member !== null) {
                        setMember(res.data.member);
                    } else {
                        console.log('회원 정보를 불러올 수 없습니다.');
                    }
                } else {
                    alert('error:' + res.status);
                }
            })
    }, []);

    /**
     * 비밀번호, 전화번호 변경
     */
    const [pwdMessage, setCheckPwdMessage] = useState('');
    const [pwd2Message, setCheckPwd2Message] = useState('');
    const [checkPwd, setCheckPwd] = useState(false);
    const [checkPwd2, setCheckPwd2] = useState(false);
    const [telMessage, setTelMessage] = useState('');
    const [checkTel, setCheckTel] = useState(false);

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
        let pwd = document.getElementById('pwdNew').value;
        let pwd2 = e.target.value;

        if (pwd !== pwd2) {
            setCheckPwd2Message("비밀번호가 일치하지 않습니다.");
            setCheckPwd2(false);
        } else {
            setCheckPwd2Message("")
            setCheckPwd2(true);
        }
    }

    const onInputTel = (e) => {
        let tel = e.target.value;

        if (!(new RegExp("^(010)[0-9]{4}[0-9]{4}$").test(tel))) {
            setTelMessage("01012345678 형식으로 입력해 주세요.");
            setCheckTel(false);
        } else {
            setTelMessage("");
            setCheckTel(true);
        }
    }


    const [inputs, setInputs] = useState('');
    const telChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
        console.log("val: " + tel.value);
    }

    let validButton = (checkPwd && checkPwd2) || checkTel;
    console.log("pwd:" + checkPwd + ", pwd2:" + checkPwd2 + ", tel:" + checkTel);

    const edit = () => {
        let formData = new FormData();
        formData.append("id", id);
        formData.append("pwd", pwdNew.value);
        formData.append("tel", tel.value);

        axios.put("http://crewz.asuscomm.com/auth/member/edit/info", formData, {
            headers: {
                Authorization: token
            }
        })
            .then(function (res) {
                if (res.status === 200) {
                    if (res.data.member !== null) {
                        console.log('회원정보가 변경되었습니다.');
                    } else {
                        console.log('회원 정보를 변경할 수 없습니다.');
                    }
                } else {
                    alert('error:' + res.status);
                }
            });
    }

    return (
        <div>
            <div>
                <div id="profile-wrapper">
                    <img src={'http://crewz.asuscomm.com/api/member/img?id=' + id} id="profile" alt="프로필사진"/>
                </div>
                <div id="profile-upload-wrapper">
                    <label htmlFor="profile-upload" id="profile-upload-label">변경</label>
                    <input type="file" id="profile-upload" name="mf" accept="image/jpg, image/jpeg, image/png"
                           onChange={onChangeImg}/>
                </div>
            </div>

            <div className="wrapper" id="table-wrapper">
                <Form>
                    <table id="member-info">
                        <tr>
                            <th>이름</th>
                            <td><Form.Control type="text" name="name" value={member.name} readOnly={true}/>
                                <label htmlFor=""/></td>
                        </tr>
                        <tr>
                            <th>아이디</th>
                            <td><Form.Control type="text" name="id" value={member.id} readOnly={true}/>
                                <label htmlFor=""/></td>
                        </tr>
                        {/* <tr>
                            <th></th>
                            <td>
                                <Form.Control type="password" id="pwd" value={member.pwd} readOnly={true}/>
                                <label htmlFor=""/>
                            </td> 
                        </tr> */}
                        <tr>
                            <th>비밀번호</th>
                            <td><Form.Control type="password" id="pwdNew" name="pwd" placeholder="새로운 비밀번호"
                                              onInput={onInputPwd}/>
                                <label htmlFor="pwdNew">{pwdMessage}</label>
                            </td>
                        </tr>
                        <tr>
                            <th></th>
                            <td><Form.Control type="password" id="pwdNew1" placeholder="새로운 비밀번호 확인"
                                              onInput={onInputPwd2}/>
                                <label htmlFor="pwdNew">{pwd2Message}</label></td>
                        </tr>
                        <tr>
                            <th>생일</th>
                            <td><Form.Control type="text" name="birth" value={member.birth} readOnly={true}/>
                                <label htmlFor=""/>
                            </td>
                        </tr>
                        <tr>
                            <th>전화번호</th>
                            <td><Form.Control id="tel" type="text" name="tel" value={inputs.val}
                                              placeholder={member.tel} onInput={onInputTel}
                                              onChange={telChange}/>
                                <label htmlFor="pwdNew">{telMessage}</label></td>
                        </tr>
                        <tr>
                            <th></th>
                            <td className="container-fluid d-flex justify-content-end"><Button variant="danger" type="submit" onClick={edit}
                                        disabled={!validButton}>변경</Button></td>
                        </tr>
                    </table>
                </Form>
            </div>
        </div>
    )
}


