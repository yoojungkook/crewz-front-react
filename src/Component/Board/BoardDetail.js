import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BoardEdit from "./BoardEdit";

export default function BoardDetail(){
    const [log, setLog] = useState(false);

    useEffect(() => {
        const LoginId = localStorage.getItem("loginId");
        if (LoginId !== null) {
            setLog(true);
        }
    }, []);
    return(
        <div className="text-center" >

            <br/>   <h3>제목들어갈 자리</h3><br/><br/>
            <img src="https://picsum.photos/700/350"/><br/><br/>
            <textarea
                readOnly
                style={{width : '90%', height : '500px',outLine: 'none', border:'none',fontSize : '1.4rem'}}
            >{`
ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb`}
            </textarea><br/>
            <Link to ="/moim/board">목록으로  </Link><BoardEdit/>
        </div>
    );
}