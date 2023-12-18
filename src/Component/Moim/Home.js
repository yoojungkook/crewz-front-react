import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import styled from 'styled-components';
import "./moimcss.css";
import { Button } from 'react-bootstrap';


const Textarea = styled.textarea`
  width: 100%;
  min-height : 500px;
  font-size : 1.3rem;
  border:none; 
  outline:none;

`;

export default function Home() {
    return (
        <div>
            <div class="img_box">
                <Carousel class="carousel" data-bs-theme="dark">
                    <Carousel.Item className='carousel_item'>
                        <img
                            className="d-block"
                            src="https://picsum.photos/700/350"
                            alt="First slide"
                        />

                    </Carousel.Item>

                    <Carousel.Item className='carousel_item'>
                        <img

                            className="d-block"
                            src="https://picsum.photos/700/350"
                            alt="Second slide"
                        />

                    </Carousel.Item>

                    <Carousel.Item className='carousel_item'>
                        <img
                            className="d-block"
                            src="https://picsum.photos/700/350"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
                <br />
            </div>

            <snap style={{ fontSize: '40px' }}>RooTrip </snap><Badge bg="primary">운동</Badge>
            <h4 style={{ color: '#a8a8a8' }}>여행객들은 여행객끼리 통한다! 여행객들 여기 다 모여라!</h4><br />

            <div className="d-grid gap-2">
                {/* 남이 만든 모임 */}
                <Button variant="danger" size="lg">
                    가입 하기
                </Button>
                {/* 내가 만든 모임일 경우 */}
                <Button variant="success" size="lg">
                    수정하기
                </Button>
                {/* 이미 가입된 모임의 경우 */}
                <Button variant="secondary" size="lg">
                    탈퇴 하기
                </Button>

            </div>
            <hr /><br />
            <Textarea id="content">
                {`저희 RooTrip은 여행을 좋아하는 사람들을 위한 크루로, 국내/국외의 여행지들을 방방곡곡 다니며  여행하는 목표입니다. 
여러분들도 저희 크쿨에 가입하여 저희와 함께 여행해보아요!!

* 상시 소모임 * 
상시로 소모임을 만들 수 있어요! 자신이 원하는 시긴에 원하는 장소를 마음이 맞는 사람들과
함께 여행 할 수 있습니다.
물론, 올라온 여행 중 자신이 원하는 모임을 고를 수도 있어요!!

** 가입 조건 **
1. 서로를 배려 하지 않는 사람 X
2. 여행에서 독단적인 행동 X
3. 한가지 여행만을 고집하는 사람 X

** 이런 사람에게 좋아요 **
1. 여행을 좋아하는 남녀노소 누구나
2. 다양한 여행을 경험해 보고 싶은 사람
3. 혼자 보다 여럿이서 하는 여행이 좋은 사람
`}


            </Textarea>

        </div>

    );
}

