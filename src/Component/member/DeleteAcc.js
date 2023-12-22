import {Button} from "react-bootstrap";
import axios from "axios";
import "./DeleteAcc.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useNavigate} from "react-router-dom";

export default function DeleteAcc() {
    const navigate = useNavigate();
    const onClick = () => {

        const id = localStorage.getItem("loginId");
        const token = localStorage.getItem("token");

        const radios = document.getElementsByClassName('reason');
        const checkbox = document.querySelector('input[type="checkbox"]');
        let radioSelected = false;
        let checkboxSelected = checkbox.checked;

        for (const radio of radios) {
            if (radio.checked) {
                radioSelected = true;
                break;
            }
        }

        if (!radioSelected || !checkboxSelected) {
            alert('탈퇴 이유 선택 및 탈퇴 안내를 확인하고 동의해주세요.');
            return;
        } else {
            axios.delete('http://crewz.asuscomm.com/auth/member/del?id=' + id, {headers: {Authorization: token}},)
                .then(function (res) {
                    if (res.status === 200) {
                        if (res.data.msg !== null) {
                            alert(res.data.msg);
                            localStorage.clear();
                            navigate('/');
                        } else {
                            console.log("탈퇴에 실패하였습니다.");
                        }
                    } else {
                        console.log("error:" + res.status);
                    }
                })
        }

    }
    return (
        <>
            <p id="main">탈퇴 안내</p>


            <div className="row">
                <h6 className="info"><i className="bi bi-check-lg"></i> 아이디 재사용 및 복구 불가</h6><br/>
                <p>탈퇴한 아이디는 재사용 및 복구가 불가능합니다.</p>
            </div>

            <div className="row">
                <h6 className="info"><i className="bi bi-check-lg"></i> 탈퇴 후 개인 정보 삭제</h6><br/>
                <p>탈퇴 시 계정의 모든 정보는 삭제됩니다.</p>
            </div>

            <div className="row">
                <h6 className="info"><i className="bi bi-check-lg"></i> 탈퇴하는 이유를 선택해주세요.</h6><br/>
                <ul className="list-reason">
                    <li className="list-group-item">
                        <input className="reason" type="radio" value="1" name="reason" id="firstRadio"/>
                        <label className="form-check-label" htmlFor="firstRadio"> 서비스를 사용하지 않아서</label>
                    </li>
                    <li className="list-group-item">
                        <input className="reason" type="radio" value="2" name="reason" id="secondRadio"/>
                        <label className="form-check-label" htmlFor="secondRadio"> 이용하기 불편해서</label>
                    </li>
                    <li className="list-group-item">
                        <input className="reason" type="radio" value="3" name="reason" id="thirdRadio"/>
                        <label className="form-check-label" htmlFor="thirdRadio"> 다른 서비스를 사용해서</label>
                    </li>
                    <li className="list-group-item">
                        <input className="reason" type="radio" value="4" name="reason" id="fourthRadio"/>
                        <label className="form-check-label" htmlFor="fourthRadio"> 삭제하고 싶은 기록이 있어서</label>
                    </li>
                    <li className="list-group-item">
                        <input className="reason" type="radio" value="5" name="reason" id="fifthRadio"/>
                        <label className="form-check-label" htmlFor="fifthRadio"> 사용 빈도가 낮아서</label>
                    </li>
                    <li className="list-group-item">
                        <input className="reason" type="radio" value="6" name="reason" id="sixthRadio"/>
                        <label className="form-check-label" htmlFor="sixthRadio"> 기타</label>
                    </li>
                </ul>
            </div>

            <hr/>

            <div>
                <p className="check">탈퇴 후 해당 아이디로는 다시 가입할 수 없으며 계정 복구는 불가능합니다.</p>
                <input type="checkbox"/><span id="checkbox"> 안내 사항을 모두 확인하였으며 이에 동의합니다.</span>
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Button variant="danger" onClick={onClick}>탈퇴</Button>
            </div>
        </>
    )
}