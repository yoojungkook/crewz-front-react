/**
 *마이페이지용 헤더
 */
import "./Header.css"
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <>
            <div id="header">
                <Link to="/">
                    <img id="logo" alt="logo" src="/img/home-logo.png"/>
                </Link>
                <hr/>
            </div>
        </>
    )
}