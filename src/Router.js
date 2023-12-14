import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Moim/Home";
import SomoimHome from "./Component/Somoim/SomoimHome";
import Temp from "./Component/temp";
import ReviewTest from "./Component/review/ReviewTest";
import ReviewEditModal from "./Component/review/ReviewEditModal";
import ReviewAddModal from "./Component/review/ReviewAddModal"
import AlbemHome from "./Component/Ablem/AlbemHome";
import Main from "./Component/main";

class Router extends Component {
    render() {
        return (
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/moim/home" element={<Home />} />
                <Route path="/somoim/home" element={<SomoimHome />} />
                <Route path="/moim/albem" element={<AlbemHome />} />
                <Route path="/temp" element={<Temp />} />
                <Route path="/review/ReviewTest" element={<ReviewTest />} />
                <Route path="/review/ReviewAddModal" element={<ReviewAddModal />} />
                <Route path="/review/ReviewEditModal" element={<ReviewEditModal />} />
            </Routes>
        )
    }
}
export default Router;  