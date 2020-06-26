import React from "react";
import {DATA} from "../../data/data";
import SmCharts from "../charts/SmCharts";
import SmTestCards from "../cards/SmTestCards";
import SmCasesCards from "../cards/SmCasesCards";
import {Alert, Col, Container, Row} from "react-bootstrap";
import SmTestDayChart from "../charts/SmTestDayChart";

export default class SmTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {lastUpdate: ''};
    }


    componentDidMount() {
        this.setState({lastUpdate: this.getDateFormatted()});
    }

    getDateFormatted() {
        const date = DATA[0].date.split('T')[0].split('-');
        const year = date[0];
        const month = date[1]
        const day = date[2];
        return day + '/' + month + '/' + year;
    }

    render() {
        const {lastUpdate} = this.state;
        const sourceLabel = 'Municipalidad de San Miguel';
        const sourceUrl = 'https://www.msm.gov.ar/prensa/informe-covid-san-miguel/'
        return (
            <div>
                <div className={'last-update'}>
                    <Container>
                        <h3>Última actualización: {lastUpdate}</h3>
                        {/*<Alert variant={'warning'}>*/}
                        {/*    Por problemas técnicos a nivel nacional con el sistema de información no se pudo publicar el*/}
                        {/*    informe completo de San Miguel. Solo se actualizaron los datos de casos confirmados y nuevos*/}
                        {/*    hoy.*/}
                        {/*</Alert>*/}
                    </Container>
                </div>
                <div>
                    <SmCasesCards/>
                </div>
                <div>
                    <SmCharts/>
                </div>
                <div>
                    <SmTestCards/>
                </div>
                <div>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <SmTestDayChart/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div>
                    <p className={'source'}><strong>Fuente: </strong><a
                        rel={'noopener noreferrer'}
                        target={'_blank'}
                        href={sourceUrl}>{sourceLabel}</a></p>
                </div>
            </div>
        )
    }
}
