import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import CardIndicator from "../shared/card/CardIndicator";

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
            <div className={'cards-container'}>
                <Container>
                    <h1 className={'section-title'}>Casos</h1>
                    <Row>
                        <Col md={3} sm={4} xs={6}>
                            <CardIndicator title={'Confirmados'} value={this.state.total}/>
                        </Col>
                        <Col md={3} sm={4} xs={6}>
                            <CardIndicator title={'Nuevos hoy'} value={this.state.newCases}/>
                        </Col>
                        <Col md={3} sm={4} xs={6}>
                            <CardIndicator title={'Activos'} value={this.state.active}/>
                        </Col>
                        <Col md={3} sm={4} xs={6}>
                            <CardIndicator title={'Recuperados'} value={this.state.recovered}/>
                        </Col>
                        <Col md={{ span: 3, offset: 3 }} sm={4} xs={6}>
                            <CardIndicator title={'Fallecidos'} value={this.state.deaths}/>
                        </Col>
                        <Col md={3} sm={4} xs={6}>
                            <CardIndicator title={'Letalidad'} value={this.state.deathsRate + '%'}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
