//가장 왼편에는 수직 네비바
//프로필사진
//내정보
import {Button, Form} from "react-bootstrap";

export default function MyPage() {
    // const token = sessionStorage.getItem('token');
    // const [dto, setDto] = useState({});
    //
    // useEffect(() => {
    //     axios.get('http://localhost:8081/auth/info', {headers: {Authorization: token}})
    //         .then(function (res) {
    //             if (res.status === 200) {
    //                 if (res.data.flag) {
    //                     setDto(res.data.m);
    //                 } else {
    //                     alert('회원 정보를 불러올 수 없습니다.');
    //                 }
    //             } else {
    //                 alert('error:' + res.status);
    //             }
    //         })
    // }, []);

    // const onChange = (e) => {
    //     const {name, value} = e.target;
    //     setDto({
    //         ...dto,
    //         [name]: value
    //     })
    // }

    return (
        <div>
            {/*이름, 아이디, 비밀번호, 생일, 전화번호*/}
            <Form>
                <table>
                    <tr>
                        <th>이름</th>
                        <td><Form.Control type="text" name="name" value="크루즈" readOnly={true}/></td>
                    </tr>
                    <tr>
                        <th>아이디</th>
                        <td><Form.Control type="text" name="id" value="crewz" readOnly={true}/></td>
                    </tr>
                    <tr>
                        <th>비밀번호</th>
                        <td>
                            <Form.Control type="password" name="pwd" value="12345" readOnly={true}/>
                        </td>
                    </tr>
                    <tr>
                        <th></th>
                        <td><Form.Control type="password" name="pwd2" placeholder="변경할 비밀번호를 입력해 주세요."/></td>
                    </tr>
                    <tr>
                        <th>생일</th>
                        <td><Form.Control type="date" name="birth" value="2023-12-18" readOnly={true}/></td>
                    </tr>
                    <tr>
                        <th>전화번호</th>
                        <td><Form.Control type="text" name="tel" value="01012345678"/></td>
                        <td><Button variant="danger" type="submit">변경</Button></td>
                    </tr>
                </table>
            </Form>
        </div>
    )
}