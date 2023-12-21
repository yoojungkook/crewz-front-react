import {Button} from "react-bootstrap";
import axios from "axios";

export default function DeleteAcc() {
    const onClick = () => {
        if (window.confirm('크루즈를 떠나시겠습니까?')) {
            axios.delete()
                .then(function (res) {
                    if (res.status === 200) {
                        alert('탈퇴가 완료되었습니다.');
                    } else {
                        console.log('error:' + res.status);
                    }
                })
        } else {
            console.log('이전 페이지로 돌아갑니다.');
        }
    }
    return (
        <>
            <p>회원 탈퇴</p>
            <div className="row">
                <h6>아이디 재사용 및 복구 불가</h6>
                <p>탈퇴하면 기존에 사용한 아이디는 재사용 및 복구가 불가능합니다.</p>
            </div>

            <div className="row">
                <h6>회원 정보 및 개인 데이터 삭제</h6>
                <p>탈퇴 시 계정의 모든 정보는 삭제됩니다.</p>
            </div>

            <div className="row">
                <h6>
                    탈퇴하는 이유를 선택해주세요</h6>
                <ul className="list-reason">
                    <li className="list-group-item">
                        <input className="reason" type="radio" value="1" name="reason" id="firstRadio"/>
                        <label className="form-check-label" htmlFor="firstRadio">서비스를 사용하지 않아서</label>
                    </li>
                    <li className="list-group-item">
                        <input className="reason" type="radio" value="2" name="reason" id="secondRadio"/>
                        <label className="form-check-label" htmlFor="secondRadio">이용하기 불편해서</label>
                    </li>
                    <li className="list-group-item">
                        <input className="reason" type="radio" value="3" name="reason" id="thirdRadio"/>
                        <label className="form-check-label" htmlFor="thirdRadio">다른 서비스를 사용해서</label>
                    </li>
                </ul>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Button variant="danger" onClick={onClick}>탈퇴</Button>
            </div>
        </>
    )
}