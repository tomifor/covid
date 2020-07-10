import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ChartContainer from "./ChartContainer";
import {VictoryAxis, VictoryChart, VictoryLine, VictoryLabel, VictoryLegend, VictoryVoronoiContainer} from "victory";
import DateFilter from "../DateFilter/DateFilter";


export default class ArChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            total: null,
            death: null,
            active: null,
            recovered: null,
            newCases: null,
            max: 15000,
            legend: [
                {name: 'Casos totales', color: '#a23dd5'},
                {name: 'Activos', color: '#3da0d5'},
                {name: 'Recuperados', color: '#3dd568'},
                {name: 'Fallecidos', color: '#e21212'},
            ]
        };
    }

    componentDidMount() {
        this.processData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.data !== prevProps.data) {
            this.processData();
        }
    }

    processData() {
        if (this.props.data) {
            const total = this.props.data.map(item => ({
                x: new Date(Date.parse(item.Date)),
                y: item.Confirmed
            }));
            const maxValue = Math.max.apply(Math, total.map((o) => {
                return o.y;
            }));

            const death = this.props.data.map(item => ({
                x: new Date(Date.parse(item.Date)),
                y: item.Deaths
            }));

            const active = this.props.data.map(item => ({
                x: new Date(Date.parse(item.Date)),
                y: item.Active
            }));

            const recovered = this.props.data.map(item => ({
                x: new Date(Date.parse(item.Date)),
                y: item.Recovered
            }));


            this.setState({
                total: total,
                death: death,
                newCases: [],
                recovered: recovered,
                active: active,
                max: maxValue + 1000
            });
        }
    }

    filterChartData(days) {

    }

    getDateFormatted(date) {
        console.log(date);
        const newDate = new Date(date);
        const day = newDate.getDay();
        const month = newDate.getMonth();
        const year = newDate.getFullYear();
        return day + '/' + month + '/' + year;
    }

    render() {
        const {total, death, recovered, active} = this.state;
        return (
            <div>
                {/*<DateFilter onChange={(value) => this.getDateFormatted(value)}/>*/}
                <Container>
                    <Row>
                        <Col lg={12}>
                            <ChartContainer customClass={'ar-chart'} title={'Argentina'}>
                                <VictoryChart height={220}
                                              domain={{y: [0, this.state.max]}}
                                              scale={{x: 'time', y: 'linear'}}
                                    // containerComponent={
                                    //     <VictoryVoronoiContainer
                                    //         labels={({datum}) => `Fecha: ${this.getDateFormatted(datum.x)}, \n ${datum.y}`}
                                    //     />
                                    // }
                                              padding={{top: 20, bottom: 25, right: 20, left: 20}}>
                                    <VictoryLine
                                        name={'total-cases'}
                                        interpolation="natural"
                                        height={100}
                                        animate={{
                                            duration: 1000,
                                            onLoad: {duration: 1000},
                                        }}
                                        style={{
                                            data: {stroke: "#a23dd5", strokeWidth: 2, strokeLinecap: "round"},
                                            parent: {border: "1px solid #ccc"},
                                            labels: {
                                                fontSize: 10,
                                            }
                                        }}
                                        data={total}
                                        minDomain={{y: 0}}
                                        labels={({datum}) => total && total[total.length - 1].y === datum.y ? datum.y : ''}
                                    />
                                    <VictoryLine
                                        name={'active-cases'}
                                        interpolation="natural"
                                        height={100}
                                        animate={{
                                            duration: 1000,
                                            onLoad: {duration: 1000},
                                        }}
                                        style={{
                                            data: {stroke: "#3da0d5", strokeWidth: 2, strokeLinecap: "round"},
                                            parent: {border: "1px solid #ccc"},
                                            labels: {
                                                fontSize: 10,
                                            }
                                        }}
                                        data={active}
                                        minDomain={{y: 0}}
                                        labels={({datum}) => active && active[active.length - 1].y === datum.y ? datum.y : ''}
                                    />
                                    <VictoryLine
                                        name={'recovered-cases'}
                                        interpolation="natural"
                                        height={100}
                                        animate={{
                                            duration: 1000,
                                            onLoad: {duration: 1000}
                                        }}
                                        style={{
                                            data: {stroke: "#3dd568", strokeWidth: 2, strokeLinecap: "round"},
                                            parent: {border: "1px solid #ccc"},
                                            labels: {
                                                fontSize: 10,
                                            }
                                        }}
                                        data={recovered}
                                        minDomain={{y: 0}}
                                        labels={({datum}) => recovered && recovered[recovered.length - 1].y === datum.y ? datum.y : ''}
                                    />
                                    <VictoryLine
                                        name={'death-cases'}
                                        interpolation="natural"
                                        height={100}
                                        animate={{
                                            duration: 1000,
                                            onLoad: {duration: 1000}
                                        }}
                                        style={{
                                            data: {stroke: "#e21212", strokeWidth: 2, strokeLinecap: "round"},
                                            parent: {border: "1px solid #ccc"},
                                            labels: {
                                                fontSize: 10,
                                            }
                                        }}
                                        data={death}
                                        minDomain={{y: 0}}
                                        labels={({datum}) => death && death[death.length - 1].y === datum.y ? datum.y : ''}
                                    />
                                    <VictoryAxis dependentAxis
                                                 tickCount={8}
                                                 style={{
                                                     axis: {
                                                         stroke: '#636363'
                                                     },
                                                 }}
                                                 tickFormat={(t) => `${t / 1000}k`}
                                                 tickLabelComponent={<VictoryLabel style={{fontSize: '8px'}} x={17}/>}
                                    />
                                    <VictoryAxis tickCount={28}
                                                 scale={{x: 'time'}}
                                                 tickFormat={(x) => (new Date(x).getDate()) + ' ' + (month[new Date(x).getMonth()])}
                                                 tickLabelComponent={<VictoryLabel angle={50} style={{fontSize: '6px'}}
                                                                                   y={205}/>}
                                                 style={{
                                                     axis: {
                                                         stroke: '#636363'
                                                     }
                                                 }}/>
                                    <VictoryLegend x={40} y={20}
                                                   gutter={10}
                                                   symbolSpacer={5}
                                                   className={'confirmed-legend'}
                                                   orientation="horizontal"
                                                   style={{
                                                       labels: {fontWeight: 400, fontSize: 10},
                                                   }}
                                                   colorScale={this.state.legend.map(elem => elem.color)}
                                                   data={this.state.legend.map(elem => ({name: elem.name}))}
                                    />
                                </VictoryChart>
                            </ChartContainer>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

const month = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
