import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {DATA} from '../../data/data'
import CardIndicator from "../shared/card/CardIndicator";

export default class SmCasesCards extends React.Component {

    constructor(props) {
        super(props);
        const last = DATA[0];
        const active = last.cases.total - last.cases.cured - last.cases.dead;
        this.state = {
            total: last.cases.total,
            newCases: last.cases.newCases,
            active: active,
            insideHospitalized: last.cases.insideHospitalized,
            cured: last.cases.cured,
            study: last.inStudy,
            dismiss: last.dismiss,
            dead: last.cases.dead,
            deadRate: ((last.cases.dead / last.cases.total) * 100).toFixed(1),
        }
    }

    render() {
        return (
            <div className={'cards-container'}>
                <Container>
                    <h1 className={'section-title'}>Casos</h1>
                    <Row>
                        <Col md={3} xs={6}>
                            <CardIndicator title={'Confirmados'} value={this.state.total}/>
                        </Col>
                        <Col md={3} xs={6}>
                            <CardIndicator title={'Nuevos hoy'} value={this.state.newCases}/>
                        </Col>
                        <Col md={3} xs={6}>
                            <CardIndicator title={'Activos'} value={this.state.active}/>
                        </Col>
                        <Col md={3} xs={6}>
                            <CardIndicator title={'Descartados'} value={this.state.dismiss}/>
                        </Col>
                    </Row>
                    {/*<Row>*/}
                    {/*    <Col md={3} xs={6}>*/}
                    {/*        <CardIndicator className="text-center card-container">*/}
                    {/*            <CardIndicator.Header>*/}
                    {/*                <h2 className={'title cured'}>Recuperados</h2>*/}
                    {/*            </CardIndicator.Header>*/}
                    {/*            <CardIndicator.Body>*/}
                    {/*                <CardIndicator.Title><p className={'value'}>{this.state.cured}</p></CardIndicator.Title>*/}
                    {/*            </CardIndicator.Body>*/}
                    {/*        </CardIndicator>*/}
                    {/*    </Col>*/}
                    {/*    <Col md={3} xs={6}>*/}
                    {/*        <CardIndicator className="text-center card-container">*/}
                    {/*            <CardIndicator.Header>*/}
                    {/*                <h2 className={'title'}>Internados</h2>*/}
                    {/*            </CardIndicator.Header>*/}
                    {/*            <CardIndicator.Body>*/}
                    {/*                <CardIndicator.Title><p className={'value'}>{this.state.insideHospitalized}</p></CardIndicator.Title>*/}
                    {/*            </CardIndicator.Body>*/}
                    {/*        </CardIndicator>*/}
                    {/*    </Col>*/}
                    {/*    <Col md={3} xs={6}>*/}
                    {/*        <CardIndicator className="text-center card-container">*/}
                    {/*            <CardIndicator.Header><h2 className={'title'}>Fallecidos</h2></CardIndicator.Header>*/}
                    {/*            <CardIndicator.Body>*/}
                    {/*                <CardIndicator.Title><p className={'value'}>{this.state.dead}</p></CardIndicator.Title>*/}
                    {/*            </CardIndicator.Body>*/}
                    {/*        </CardIndicator>*/}
                    {/*    </Col>*/}
                    {/*    <Col md={3} xs={6}>*/}
                    {/*        <CardIndicator className="text-center card-container">*/}
                    {/*            <CardIndicator.Header><h2 className={'title'}>Letalidad</h2></CardIndicator.Header>*/}
                    {/*            <CardIndicator.Body>*/}
                    {/*                <CardIndicator.Title><p className={'value'}>{this.state.deadRate}<span>%</span></p>*/}
                    {/*                </CardIndicator.Title>*/}
                    {/*            </CardIndicator.Body>*/}
                    {/*        </CardIndicator>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                </Container>
            </div>
        )
    }
}
