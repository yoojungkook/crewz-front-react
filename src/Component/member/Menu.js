import {Link} from "react-router-dom";

export default function Menu(){
    return(
        <div className="menu">
            <ul>
                <li><Link to="/member/info">회원정보</Link></li>
                <li><Link to="/member/message">메세지함</Link></li>
                {/*<li><Link to="/member/mycrew">나의크루</Link></li>*/}
                {/*<li><Link to="/member/likecrew">찜한크루</Link></li>*/}
                {/*<li><Link to="/member/partincrew">참가크루</Link></li>*/}
                {/*<li><Link to="/member/review">나의리뷰</Link></li>*/}
                <li><Link to="/member/delete">회원탈퇴</Link></li>
            </ul>
        </div>
    )
}