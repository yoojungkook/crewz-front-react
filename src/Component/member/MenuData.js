import 'bootstrap-icons/font/bootstrap-icons.css';
export const MenuData = [
    {
        title: "홈",
        icon: <i className="bi bi-house-door"></i>,
    // <img src="/assets/icons/bootstrap.svg" alt="Bootstrap" width="32" height="32">
        link: "/"
    },
    {
        title: "마이페이지",
        icon: <i className="bi bi-person"></i>,
        link: "/member/mypage"
    },
    {
        title: "메세지함",
        icon: <i className="bi bi-envelope"></i>,
        link: "/member/message"
    },
    {
        title: "나의모임",
        icon: <i className="bi bi-people"></i>,
        link: "/member/mycrew"
    },
    {
        title: "관심모임",
        icon: <i className="bi bi-heart"></i>,
        link: "/member/mycrew/like"
    },
    {
        title: "참가모임",
        icon: <i className="bi bi-geo"></i>,
        link: "/member/mycrew/partin"
    },
    {
        title: "리뷰관리",
        icon: <i className="bi bi-card-text"></i>,
        link: "/member/review"
    }
]
