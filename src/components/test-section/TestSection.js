import React from "react";
import './TestSection.scss';
import {Card, Col, Container, Row} from "react-bootstrap";
import {DATA} from "../../data/data";

export default class TestSection extends React.Component {

    constructor(props) {
        super(props);
        const population = 300000;
        const last = DATA[0];
        const yesterday = DATA[1];
        this.state = {
            total: last.dismiss + last.cases.total,
            study: last.inStudy,
            today: (last.dismiss + last.cases.total) - (yesterday.dismiss + yesterday.cases.total),
            rate: (100000 * (last.dismiss + last.cases.total) / population).toFixed(0),
        }
    }

    render() {
        return (
            <div className={'test-container'}>
                <Container>
                    <h1>Test</h1>
                    <Row>
                        <Col md={3} xs={6}>
                            <Card className="text-center card-container">
                                <Card.Header>
                                    <h2 className={'title'}>Totales</h2>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>
                                        <p className={'value'}>{this.state.total}</p>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} xs={6}>
                            <Card className="text-center card-container">
                                <Card.Header>
                                    <h2 className={'title'}>Hoy</h2>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title><p className={'value'}>{this.state.today}</p></Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} xs={6}>
                            <Card className="text-center card-container">
                                <Card.Header><h2 className={'title study'}>Pendientes</h2></Card.Header>
                                <Card.Body>
                                    <Card.Title><p className={'value'}>{this.state.study}</p></Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} xs={6}>
                            <Card className="text-center card-container">
                                <Card.Header><h2 className={'title'}>C/100K hab</h2></Card.Header>
                                <Card.Body>
                                    <Card.Title><p className={'value'}>{this.state.rate}</p></Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
