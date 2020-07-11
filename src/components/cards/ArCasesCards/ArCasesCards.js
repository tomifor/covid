import React from "react";
import './ArCasesCards.scss';
import {Col, Container, Row} from "react-bootstrap";
import CardIndicator from "../../shared/card/CardIndicator";
import {ArgentinaData} from "../../../data/extra-data";

export default class ArCasesCards extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            total: '',
            active: '',
            recovered: '',
            newCases: '',
        }
    }

    componentDidMount() {
        this.processData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps) {
            this.processData();
        }
    }

    processData() {
        if(this.props.current && this.props.previous) {
            this.setState({
                total: this.props.current.Confirmed,
                active: this.props.current.Active,
                recovered: this.props.current.Recovered,
                newCases: this.props.current.Confirmed - this.props.previous.Confirmed,
                deaths: this.props.current.Deaths,
                deathsRate: ((this.props.current.Deaths / this.props.current.Confirmed)*100).toFixed(1).replace('.', ','),
            });
        }
    }

    render() {
        return (
            <div id={'ar-cases-cards'} className={'cards-container'}>
                <Container fluid={true}>
                    <h1 className={'section-title'}>Casos</h1>
                    <Row>
                        <Col lg={3} md={4} sm={6} xs={6}>
                            <CardIndicator title={'Confirmados'} value={this.state.total}/>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={6}>
                            <CardIndicator title={'Nuevos hoy'} value={this.state.newCases}/>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={6}>
                            <CardIndicator title={'Activos'} value={this.state.active}/>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={6}>
                            <CardIndicator title={'Recuperados'} value={this.state.recovered}/>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={6}>
                            <CardIndicator title={'Fallecidos'} value={this.state.deaths}/>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={6}>
                            <CardIndicator title={'Letalidad'} value={this.state.deathsRate + '%'}/>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={6}>
                            <CardIndicator customClass={'avg-deceased'} title={'Edad prom. fallecidos'} value={ArgentinaData.avgAgeDeceased}/>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={6}>
                            <CardIndicator customClass={'intensive-care'} title={'En terapia intensiva'} value={ArgentinaData.intensiveCarePatients}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
