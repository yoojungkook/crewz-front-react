import "./Menu.css";
import {MenuData} from "./MenuData";

export default function Menu() {
    return (
        <div className="sidebar">
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

