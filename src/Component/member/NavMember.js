//수직 네비게이션 메뉴바
export default function NavMember() {
    return (
        <>
            <ul class="nav nav-pills flex-column mb-3" id="menu" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="menu-myinfo" data-bs-toggle="pill"
                            data-bs-target="#content-myinfo"
                            type="button" role="tab" aria-controls="content-myinfo" aria-selected="true"><i
                        class="fa-solid fa-circle-info"></i>회원정보
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="menu-message" data-bs-toggle="pill" data-bs-target="#content-message"
                            type="button" role="tab" aria-controls="content-message" aria-selected="false"><i
                        class="fa-solid fa-envelope"></i>메세지함
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="menu-mygroup" data-bs-toggle="pill" data-bs-target="#content-mygroup"
                            type="button" role="tab" aria-controls="content-mygroup" aria-selected="false"><i
                        class="fa-solid fa-user-group"></i>나의모임
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="menu-likegroup" data-bs-toggle="pill"
                            data-bs-target="#content-likegroup"
                            type="button" role="tab" aria-controls="content-likegroup" aria-selected="false"><i
                        class="fa-solid fa-heart"></i>찜한모임
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="menu-partingroup" data-bs-toggle="pill"
                            data-bs-target="#content-partingroup" type="button" role="tab"
                            aria-controls="content-partingroup" aria-selected="false"><i
                        class="fa-solid fa-handshake"></i>참가모임
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="menu-delete" data-bs-toggle="pill" data-bs-target="#content-delete"
                            type="button" role="tab" aria-controls="content-delete" aria-selected="false"><i
                        class="fa-solid fa-user-xmark"></i>회원탈퇴
                    </button>
                </li>
            </ul>
        </>
    )
}