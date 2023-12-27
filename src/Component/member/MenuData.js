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
    // {
    //     title: "메세지함",
    //     icon: <i className="bi bi-envelope"></i>,
    //     link: "/member/message"
    // },
    {
        title: "나의 모임",
        icon: <i className="bi bi-people"></i>,
        link: "/member/mycrew"
    },
    {
        title: "참가한 소모임",
        icon: <i className="bi bi-geo"></i>,
        link: "/member/mycrew/partin"
    },
    // {
    //     title: "리뷰관리",
    //     icon: <i className="bi bi-card-text"></i>,
    //     link: "/member/review"
    // },
    {
        title: "회원탈퇴",
        icon: <i className="bi bi-ban"></i>,
        link: "/member/delete"
    }
]
