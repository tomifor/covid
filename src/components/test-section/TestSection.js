import React from "react";
import './TestSection.scss';
import {Card, Col, Container, Row} from "react-bootstrap";
import {DATA} from "../../data";

export default class TestSection extends React.Component {

    constructor(props) {
        super(props);
        const last = DATA[0];
        const active = last.cases.total - last.cases.cured - last.cases.dead;
        this.state = {
            total: last.dismiss,
            study: last.inStudy,
        }
    }
    render() {
        return (
            <div className={'test-container'}>
                <h1>Test</h1>
                <Container>
                    <Row>
                        <Col md={3} xs={6}>
                            <Card className="text-center card-container">
                                <Card.Header>
                                    <h3 className={'title'}>Totales</h3>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>
                                        {/*<p className={'value'}>{this.state.total}</p>*/}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} xs={6}>
                            <Card className="text-center card-container">
                                <Card.Header>
                                    <h3 className={'title'}>Hoy</h3>
                                </Card.Header>
                                <Card.Body>
                                    {/*<Card.Title><p className={'value'}>{this.state.active}</p></Card.Title>*/}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} xs={6}>
                            <Card className="text-center card-container">
                                <Card.Header><h3 className={'title'}>En estudio</h3></Card.Header>
                                <Card.Body>
                                    {/*<Card.Title><p className={'value'}>{this.state.study}</p></Card.Title>*/}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} xs={6}>
                            <Card className="text-center card-container">
                                <Card.Header><h3 className={'title'}>Cada 100K hab.</h3></Card.Header>
                                <Card.Body>
                                    {/*<Card.Title><p className={'value'}>{this.state.dismiss}</p></Card.Title>*/}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
