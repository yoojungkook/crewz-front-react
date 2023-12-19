import "./Menu.css";
import {MenuData} from "./MenuData";

export default function Menu() {
    return (
        <div className="sidebar">

            {/*<ul id="menu">*/}
            {/*<li><button><Link to="/member/mypage">회원정보</Link></button></li>*/}
            {/*<li><button><Link to="/member/message">메세지함</Link></button></li>*/}
            {/*<li><button><Link to="/member/mycrew">나의모임</Link></button></li>*/}
            {/*<li><button><Link to="/member/mycrew/partin">참가모임</Link></button></li>*/}
            {/*<li><button><Link to="/member/mycrew/like">관심모임</Link></button></li>*/}
            {/*<li><button><Link to="/member/review">리뷰관리</Link></button></li>*/}

            {/*<li><Link to="/member/mypage"><button>회원정보</button></Link></li>*/}
            {/*<li><Link to="/member/message"><button>메세지함</button></Link></li>*/}
            {/*<li><Link to="/member/mycrew"><button>나의모임</button></Link></li>*/}
            {/*<li><Link to="/member/mycrew/partin"><button>참가모임</button></Link></li>*/}
            {/*<li><Link to="/member/mycrew/like"><button>관심모임</button></Link></li>*/}
            {/*<li><Link to="/member/review"><button>리뷰관리</button></Link></li>*/}
            {/*</ul>*/}
            <ul className="sidebarList">
                {MenuData.map((val, key) => {
                    return (
                        <li key={key} className="row" id={window.location.pathname === val.link ? "active" : ""}
                            onClick={() => {
                                window.location.pathname = val.link
                            }}>
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

