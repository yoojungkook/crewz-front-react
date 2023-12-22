import {Image, Table} from "react-bootstrap";

export default function MyReview(){
    return(
        <>
            <div>
                <Table hover>
                    <thead>
                    <tr>
                        <th>참가한 모임</th>
                        <th>참가일자</th>
                        <th>제목</th>
                        <th>내용</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>독서모임</td>
                        <td>23.12.20</td>
                        <td>즐거웠습니다~^^</td>
                        <td>안녕하세요. ~~~~~~~~~~~~~~~~~~~~~~</td>
                    </tr>
                    <br/>
                    <Image src="/img/home-logo.png" style={{"width":"200px"}} rounded/>
                    </tbody>
                </Table>
            </div>

        </>
    )
}


