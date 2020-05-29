import React from "react";
import TotalCasesChart from "./total-cases-chart";
import {Col, Container, Row} from "react-bootstrap";
import './charts.scss';
import DayCases from "./day-cases";
import ConfirmedChart from "./confirmed-chart";
import LethalityChart from "./lethality-chart";

export default class Charts extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <TotalCasesChart/>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <DayCases/>
                    </Col>
                </Row>
                {/*<Row>*/}
                {/*    <Col lg={6} md={6} sm={12} xs={12}>*/}
                {/*        <ConfirmedChart/>*/}
                {/*    </Col>*/}
                {/*    <Col lg={6} md={6} sm={12} xs={12}>*/}
                {/*        <LethalityChart/>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
            </Container>
        )
    }
}
