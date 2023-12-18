import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Moim/Home";
import SomoimHome from "./Component/Somoim/SomoimHome";
import Temp from "./Component/temp";
import ReviewTest from "./Component/review/ReviewTest";
import ReviewEditModal from "./Component/review/ReviewEditModal";
import ReviewAddModal from "./Component/review/ReviewAddModal"
import AlbemHome from "./Component/Ablem/AlbemHome";
import Moim from "./Moim";
import App from "./App";
import Main from "./Component/main";
import MyPage from "./Component/member/MyPage";

class Router extends Component {
    render() {
        return (
            <Routes>

                <Route path="/moim" element={<Moim />}>
                    <Route path="/moim/home" element={<Home />} />
                    <Route path="/moim/albem" element={<AlbemHome />} />
                    <Route path="/moim/somoim" element={<SomoimHome />} />
                    <Route path="/moim/review/ReviewTest" element={<ReviewTest />} />
                    <Route path="/moim/review/ReviewAddModal" element={<ReviewAddModal />} />
                    <Route path="/moim/review/ReviewEditModal" element={<ReviewEditModal />} />
                </Route>
                <Route exact path="/" element={<App />}></Route>
                <Route path="/temp" element={<Temp />} />
                <Route exact path="/" element={<Main />} />
                <Route path="/member/info" element={<MyPage/>}/>
                <Route path="/temp" element={<Temp />} />

            </Routes>
        )
    }
}
export default Router;  