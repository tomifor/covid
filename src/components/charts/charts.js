import React from "react";
import TotalCasesChart from "./total-cases-chart";
import {Col, Container, Row} from "react-bootstrap";
import './charts.scss';
import DayCases from "./day-cases";
import ConfirmedChart from "./confirmed-chart";
import LethalityChart from "./lethality-chart";
import styled from "@emotion/styled";

export default class Charts extends React.Component {
    render() {
        return (
            <StyleWrapper>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <TotalCasesChart/>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <DayCases/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <ConfirmedChart/>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <LethalityChart/>
                        </Col>
                    </Row>
                </Container>
            </StyleWrapper>
        )
    }
}

const StyleWrapper = styled("div")`
  .chart-title {
    color: ${props => props.theme.text};
  }
  .chart-container {
    border: ${props => props.theme.border};
  }
`;
