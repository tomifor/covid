import React from "react";
import styled from "@emotion/styled";
import {getDataByCountry} from "../../services/covid-service";
import ArCasesCards from "../cards/ArCasesCards";
import ArChart from "../charts/ArChart";
import {Container, Spinner} from "react-bootstrap";

const FIRST_DAY = '2020-03-03T00:00:00Z';
const COUNTRY = 'argentina';

export default class ArTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {current: null, previous: null, loading: true};
    }

    componentDidMount() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        getDataByCountry(COUNTRY, FIRST_DAY, today.toISOString()).then(res => {
            const lastUpdate = this.getDate(res[res.length - 1].Date);
            const data = this.fixApiResponse(res);
            this.setState({
                lastUpdate: lastUpdate,
                data: data,
                current: data[data.length - 1],
                previous: data[data.length - 2],
                loading: false
            });
        });
    }

    fixApiResponse(data) {
        return data.map(elem => {
            if (elem.Date === '2020-06-24T00:00:00Z') {
                return {
                    Active: 34919,
                    City: "",
                    CityCode: "",
                    Confirmed: 49851,
                    Country: "Argentina",
                    CountryCode: "AR",
                    Date: "2020-06-24T00:00:00Z",
                    Deaths: 1116,
                    Lat: "-38.42",
                    Lon: "-63.62",
                    Province: "",
                    Recovered: 13816
                }
            }
            return elem;
        });
    }

    getDate(value) {
        const date = value.split('T')[0].split('-');
        return date[2] + '/' + date[1] + '/' + date[0]
    }

    render() {
        return (
            <StyleWrapper>
                <div id={'argentina-tab'}>
                    <div>
                        {this.state.loading ?
                            <div className={'loader'}>
                                <Spinner animation="border" variant="secondary"/>
                                <p className={'loader-text'}>Cargando datos</p>
                            </div>
                            :
                            (
                                <div>
                                    <Container>
                                        <div className={'last-update'}>
                                            <h3>Última
                                                actualización: {this.state.current ? this.state.lastUpdate : ''}</h3>
                                        </div>
                                    </Container>
                                    <ArCasesCards current={this.state.current} previous={this.state.previous}/>
                                    <ArChart data={this.state.data}/>
                                </div>
                            )
                        }

                    </div>
                    <div>
                        <p className={'source'}><strong>Fuente: </strong><a
                            rel={'noopener noreferrer'}
                            target={'_blank'}
                            href={'https://covid19api.com'}>COVID19 API</a></p>
                    </div>
                </div>
            </StyleWrapper>
        )
    }

}

const StyleWrapper = styled("div")`
  .loader-text {
    color: ${props => props.theme.text};
  }
`;
