import React from "react";
import '../test-section/TestSection.scss';
import {Col, Container, Row} from "react-bootstrap";
import {DATA} from "../../data/data";
import CardIndicator from "../shared/card/CardIndicator";

export default class SmTestCards extends React.Component {

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
                    <h1 className={'section-title'}>Test</h1>
                    <Row>
                        <Col md={3} xs={6}>
                            <CardIndicator title={'Totales'} value={this.state.total}/>
                        </Col>
                        <Col md={3} xs={6}>
                            <CardIndicator title={'Hoy'} value={this.state.today}/>
                        </Col>
                        <Col md={3} xs={6}>
                            <CardIndicator title={'Pendientes'} value={this.state.study}/>
                        </Col>
                        <Col md={3} xs={6}>
                            <CardIndicator title={'C/100K hab'} value={this.state.rate}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
