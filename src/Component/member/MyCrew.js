import {Image} from "react-bootstrap";
import "./MyCrew.css"

export default function MyCrew() {
    return (
        <>
            <h1>나의 모임</h1>
            <div id="list">
                <div id="photo">사진</div>
                <div id="moim-info">
                    <div id="name">이름</div>
                    <div>
                        <div>카테고리</div>
                        <div>인원</div>
                    </div>
                </div>
            </div>
        </>
    )
}