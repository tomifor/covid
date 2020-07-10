import React from "react";
import './SmTestCards.scss';
import {Col, Container, Row} from "react-bootstrap";
import {DATA} from "../../../data/data";
import CardIndicator from "../../shared/card/CardIndicator";
import {getSmTestData} from "../../../services/covid-service";

export default class SmTestCards extends React.Component {

    constructor(props) {
        super(props);
        this.state = getSmTestData();
    }

    render() {
        return (
            <div className={'test-container'}>
                <Container fluid={true}>
                    <h1 className={'section-title'}>Casos testeados</h1>
                    <Row>
                        <Col md={3} xs={6}>
                            <CardIndicator title={'Totales'} value={this.state.total}/>
                        </Col>
                        <Col md={3} xs={6}>
                            <CardIndicator title={'Positivos totales'} customClass={'positive-total-test'}
                                           value={this.state.rate + '%'}/>
                        </Col>
                        <Col md={3} xs={6}>
                            <CardIndicator title={'Del día'} value={this.state.today}
                                           extraValue={this.state.yesterdayDifference}
                                           positive={this.state.yesterdayDifference >= 0}/>
                        </Col>
                        <Col md={3} xs={6}>
                            <CardIndicator title={'Pendientes'} value={this.state.study}
                                           extraValue={this.state.studyYesterday}
                                           positive={this.state.studyYesterday <= 0}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
