import React from "react";
import SmTotalCasesChart from "./SmTotalCasesChart";
import {Col, Container, Row} from "react-bootstrap";
import './charts.scss';
import SmDayCases from "./SmDayCases";
import SmConfirmedChart from "./SmConfirmedChart";
import SmLethalityChart from "./SmLethalityChart";

export default class SmCharts extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <SmTotalCasesChart/>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <SmDayCases/>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <SmConfirmedChart/>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <SmLethalityChart/>
                    </Col>
                </Row>
            </Container>
        )
    }
}
