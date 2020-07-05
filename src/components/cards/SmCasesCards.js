import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {DATA} from '../../data/data'
import CardIndicator from "../shared/card/CardIndicator";

export default class SmCasesCards extends React.Component {

    constructor(props) {
        super(props);
        const last = DATA[0];
        const yesterday = DATA[1];
        const active = last.cases.total - last.cases.cured - last.cases.dead;
        const yesterdayActive = active - (yesterday.cases.total - yesterday.cases.cured - yesterday.cases.dead);
        const hospitalized = last.cases.insideHospitalized + last.cases.outsideHospitalized;
        this.state = {
            total: last.cases.total.toString(),
            newCases: last.cases.newCases.toString(),
            active: active.toString(),
            differenceActive: yesterdayActive.toString(),
            duplication: this.calculateDuplication(DATA),
            hospitalized: hospitalized.toString(),
            differenceHospitalized: (hospitalized - (yesterday.cases.insideHospitalized + yesterday.cases.outsideHospitalized)).toString(),
            cured: last.cases.cured.toString(),
            differenceCured: (last.cases.cured - yesterday.cases.cured).toString(),
            study: last.inStudy.toString(),
            dismiss: last.dismiss.toString(),
            differenceDismiss: (last.dismiss - yesterday.dismiss).toString(),
            dead: last.cases.dead.toString(),
            differenceDead: (last.cases.dead - yesterday.cases.dead).toString(),
            deadRate: ((last.cases.dead / last.cases.total) * 100).toFixed(1).replace('.', ','),
        }
    }

    calculateDuplication(data) {
        let result;
        const accumulated = data.map(elem => elem.cases.total);
        const total = accumulated[0];
        const divided = accumulated.map(elem => 2 - total / elem);
        divided.forEach((elem, index) => {
            if (elem > 0 && divided[index + 1] < 0) {
                result = (elem < Math.abs(divided[index + 1]) ? index : index + 1) + 1;
            }
        });
        return result;
    }

    render() {
        return (
            <div className={'cards-container'}>
                <Container>
                    <h1 className={'section-title'}>Casos</h1>
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
                            <CardIndicator title={'Duplicación'} value={this.state.duplication + ' días'}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} xs={6}>
                            <CardIndicator title={'Recuperados'} value={this.state.cured} positive
                                           extraValue={this.state.differenceCured}/>
                        </Col>
                        <Col md={3} xs={6}>
                            <CardIndicator title={'Internados'} value={this.state.hospitalized}
                                           positive={this.state.differenceHospitalized <= 0}
                                           extraValue={this.state.differenceHospitalized}/>
                        </Col>
                        <Col md={3} xs={6}>
                            <CardIndicator title={'Fallecidos'} value={this.state.dead}
                                           extraValue={this.state.differenceDead}
                                           positive={this.state.differenceDead === 0}/>
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
