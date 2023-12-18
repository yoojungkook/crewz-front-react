import 'bootstrap/dist/css/bootstrap.min.css';
import NavLogout from "./nav/NavLogout";
import NavLogin from "./nav/NavLogin";

export default function Main() {

    return (
        <div>
            <NavLogout/>
            <NavLogin/>
        </div>
    )
}