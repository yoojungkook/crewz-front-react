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
import MyPage from "./Component/member/MyPage";
import MyMessage from "./Component/member/MyMessage";
import MyCrew from "./Component/member/MyCrew";
import PartInCrew from "./Component/member/PartInCrew";
import MyReview from "./Component/member/MyReview";
import Main from "./Component/member/Main";
import Menu from "./Component/member/Menu";
import DeleteAcc from "./Component/member/DeleteAcc";
import MoimList from "./MoimList";
import Board from "./Component/Board/Board";
import BoardEdit from "./Component/Board/BoardEdit";
import BoardDetail from "./Component/Board/BoardDetail";

class Router extends Component {
    render() {
        return (
            <Routes>
                <Route exact path="/" element={<App />}></Route>
                <Route path="/moim" element={<Moim />}>
                    <Route path="/moim/home" element={<Home />} />
                    <Route path="/moim/albem" element={<AlbemHome />} />
                    <Route path="/moim/somoim" element={<SomoimHome />} />
                    <Route path="/moim/board" element={<Board/>}/>
                    <Route path="/moim/board/edit" element={<BoardEdit/>}/>
                    <Route path="/moim/board/detail" element={<BoardDetail/>}/>
                    <Route path="/moim/review/ReviewTest" element={<ReviewTest />} />
                    <Route path="/moim/review/ReviewAddModal" element={<ReviewAddModal />} />
                    <Route path="/moim/review/ReviewEditModal" element={<ReviewEditModal />} />
                </Route>
                <Route path="/moimlist" element={<MoimList />}></Route>
                <Route path="/temp" element={<Temp />} />
                <Route path="/menu" element={<Menu/>}/>

                <Route path="/member" element={<Main/>}>
                    <Route path="mypage" element={<MyPage/>}/>
                    <Route path="message" element={<MyMessage/>}/>
                    <Route path="mycrew" element={<MyCrew/>}/>
                    <Route path="mycrew/partin" element={<PartInCrew/>}/>
                    <Route path="review" element={<MyReview/>}/>
                    <Route path="delete" element={<DeleteAcc/>}/>
                </Route>

            </Routes>
        )
    }
}
export default Router;  