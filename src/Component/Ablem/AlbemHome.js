import { Card, Col, Container, Row } from "react-bootstrap";

export default function AlbemHome() {
    return (

        <Container className="album">
            <br></br>
            <Row style={{ background: '#f2f2f2', padding: '10px 10px 10px 10px', borderRadius: '.5rem' }} className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                
                <div style={{ width: '32%', backgroundColor: 'white', borderRadius: ".5rem", padding: '0px', margin: ' 5px 5px ' }}>
                    <Col>
                        <Card className="shadow-sm">
                            <Card.Img
                                variant="top"
                                src="https://picsum.photos/400/350"
                            />
                        </Card>
                        <br />
                        <Card.Body style={{ textAlign: 'center' }}>
                            <Card.Title style={{ paddingBottom: '1rem' }}>12월 제주도 여행</Card.Title>
                            <Card.Text>

                            </Card.Text>

                        </Card.Body>
                    </Col>
                </div>

                <div style={{ width: '32%', backgroundColor: 'white', borderRadius: ".5rem", padding: '0px', margin: ' 5px 5px ' }}>
                    <Col>
                        <Card className="shadow-sm">
                            <Card.Img
                                variant="top"
                                src="https://picsum.photos/400/350"
                            />
                        </Card>
                        <br />
                        <Card.Body style={{ textAlign: 'center' }}>
                            <Card.Title style={{ paddingBottom: '1rem' }}>12월 제주도 여행</Card.Title>
                            <Card.Text>

                            </Card.Text>

                        </Card.Body>
                    </Col>
                </div>

                <div style={{ width: '32%', backgroundColor: 'white', borderRadius: ".5rem", padding: '0px', margin: ' 5px 5px ' }}>
                    <Col>
                        <Card className="shadow-sm">
                            <Card.Img
                                variant="top"
                                src="https://picsum.photos/400/350"
                            />
                        </Card>
                        <br />
                        <Card.Body style={{ textAlign: 'center' }}>
                            <Card.Title style={{ paddingBottom: '1rem' }}>12월 제주도 여행</Card.Title>
                            <Card.Text>

                            </Card.Text>

                        </Card.Body>
                    </Col>
                </div>

                <div style={{ width: '32%', backgroundColor: 'white', borderRadius: ".5rem", padding: '0px', margin: ' 5px 5px ' }}>
                    <Col>
                        <Card className="shadow-sm">
                            <Card.Img
                                variant="top"
                                src="https://picsum.photos/400/350"
                            />
                        </Card>
                        <br />
                        <Card.Body style={{ textAlign: 'center' }}>
                            <Card.Title style={{ paddingBottom: '1rem' }}>12월 제주도 여행</Card.Title>
                            <Card.Text>

                            </Card.Text>

                        </Card.Body>
                    </Col>
                </div>
                <div style={{ width: '31%', border: '5px dashed black', borderRadius: ".5rem", fontSize: "1000%", padding: '5% 10.5%', margin: ' 5px 5px ' }}>
                    <Col>
                        +
                    </Col>
                </div>





            </Row>

        </Container>
    );
}