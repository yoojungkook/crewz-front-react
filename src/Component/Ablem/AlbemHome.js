import { Card, Col, Container, Row } from "react-bootstrap";
import AlbemAdd from "./AlbemAdd";

export default function AlbemHome() {
    const delAlbem = () => {
        window.confirm("정말 사진을 삭제하시겠습니까? ");
    }

    return (

        <Container className="album">
            <br></br>
            <Row style={{ background: '#f2f2f2', padding: '10px 10px 10px 10px', borderRadius: '.5rem' }} className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">


                <Col style={{ width: '32%', height: 'auto', backgroundColor: 'white', borderRadius: ".5rem", padding: '10px', margin: ' 5px 5px ', cursor: "pointer" }} onClick={delAlbem}>
                    <Card className="shadow-sm">
                        <Card.Img
                            src="https://picsum.photos/350/350"
                        />
                    </Card>
                </Col>
                <Col style={{ width: '32%', height: 'auto', backgroundColor: 'white', borderRadius: ".5rem", padding: '10px', margin: ' 5px 5px ', cursor: "pointer" }} onClick={delAlbem}>
                    <Card className="shadow-sm">
                        <Card.Img
                            src="https://picsum.photos/350/350"
                        />
                    </Card>
                </Col>
                <Col style={{ width: '32%', height: 'auto', backgroundColor: 'white', borderRadius: ".5rem", padding: '10px', margin: ' 5px 5px ', cursor: "pointer" }} onClick={delAlbem}>
                    <Card className="shadow-sm">
                        <Card.Img
                            src="https://picsum.photos/350/350"
                        />
                    </Card>
                </Col>





                <AlbemAdd />





            </Row>

        </Container>
    );
}