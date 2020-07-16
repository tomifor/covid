import React from "react";
import './SmCasesCards.scss'
import {Col, Container, Row} from "react-bootstrap";
import CardIndicator from "../../shared/card/CardIndicator";
import {getSmCasesData} from "../../../services/covid-service";
import {HelpTooltip} from "../../shared/help/HelpTooltip";

export default class SmCasesCards extends React.Component {

    constructor(props) {
        super(props);
        this.state = getSmCasesData();
    }

    render() {
        const tooltipText = 'Los números entre parentesis muestran la diferencia respecto el día anterior.';
        return (
            <div id={'sm-cases-cards'} className={'cards-container'}>
                <Container fluid={true}>
                    <div className={'section-header'}>
                        <h1 className={'section-title'}>Casos</h1>
                        <HelpTooltip text={tooltipText}/>
                    </div>
                    <Row>
                        <Col md={3} xs={6}>
                            <CardIndicator title={'Confirmados'} value={this.state.total} positive={false}
                                           extraValue={this.state.newCases}/>
                        </Col>
                        {/*<Col md={3} xs={6}>*/}
                        {/*    <CardIndicator title={'Nuevos hoy'} value={this.state.newCases}/>*/}
                        {/*</Col>*/}
                        <Col md={3} xs={6}>
                            <CardIndicator title={'Activos'} value={this.state.active}
                                           extraValue={this.state.differenceActive}
                                           positive={this.state.differenceActive <= 0}/>
                        </Col>
                        <Col md={3} xs={6}>
                            <CardIndicator title={'Descartados'} value={this.state.dismiss}
                                           extraValue={this.state.differenceDismiss} positive/>
                        </Col>
                        <Col md={3} xs={6}>
                            <CardIndicator title={'Recuperados'} value={this.state.cured}
                                           positive={this.state.differenceCured > 0}
                                           extraValue={this.state.differenceCured}/>
                        </Col>

                    </Row>
                    <Row>
                        <Col md={3} xs={6}>
                            <CardIndicator title={'Internados'} value={this.state.hospitalized}
                                           positive={this.state.differenceHospitalized <= 0}
                                           extraValue={this.state.differenceHospitalized}/>
                        </Col>
                        <Col md={3} xs={6}>
                            <CardIndicator title={'Fallecidos'} value={this.state.dead}
                                           extraValue={this.state.differenceDead}
                                           positive={this.state.differenceDead === '0'}/>
                        </Col>
                        <Col md={3} xs={6}>
                            <CardIndicator customClass={'duplication'} title={'Duplicación'}
                                           value={this.state.duplication + ' días'}/>
                        </Col>
                        <Col md={3} xs={6}>
                            <CardIndicator title={'Letalidad'} value={this.state.deadRate + '%'}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
