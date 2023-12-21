import {Button, Form, Image} from "react-bootstrap";
import React from "react";
import "./MyPage.css"
import axios from "axios";

export default function MyPage() {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem("loginId");

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



    return (
        <div>
            <div className="wrapper">
                <div id="profile-wrapper">
                        <img src={'http://crewz.asuscomm.com/api/member/img?id='+id} id="profile" roundedCircle/>
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
                            <td><Form.Control type="text" name="name" value="크루즈" readOnly={true}/></td>
                        </tr>
                        <tr>
                            <th>아이디</th>
                            <td><Form.Control type="text" name="id" value="crewz" readOnly={true}/></td>
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td>
                                <Form.Control type="password" name="pwd" value="12345" readOnly={true}/>
                            </td>
                        </tr>
                        <tr>
                            <th></th>
                            <td><Form.Control type="password" name="pwd2" placeholder="변경할 비밀번호를 입력해 주세요."/></td>
                        </tr>
                        <tr>
                            <th>생일</th>
                            <td><Form.Control type="date" name="birth" value="2023-12-18" readOnly={true}/></td>
                        </tr>
                        <tr>
                            <th>전화번호</th>
                            <td><Form.Control type="text" name="tel" value="01012345678"/></td>
                            <td><Button variant="danger" type="submit">변경</Button></td>
                        </tr>
                    </table>
                </Form>
            </div>
        </div>
    )
}