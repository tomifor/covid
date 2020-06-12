import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ChartContainer from "./ChartContainer";
import {VictoryAxis, VictoryChart, VictoryLine, VictoryLabel, VictoryLegend} from "victory";


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

    render() {
        return (
            <Container>
                <Row>
                    <Col lg={12}>
                        <ChartContainer customClass={'ar-chart'} title={'Argentina'}>
                            <VictoryChart height={220}
                                          domain={{y: [0, this.state.max]}}
                                          scale={{x: 'time', y: 'linear'}}
                                          padding={{top: 10, bottom: 40, right: 5, left: 35}}>
                                <VictoryLine
                                    name={'total-cases'}
                                    interpolation="natural"
                                    height={100}
                                    animate={{
                                        duration: 1000,
                                        onLoad: {duration: 1000}
                                    }}
                                    style={{
                                        data: {stroke: "#a23dd5", strokeWidth: 2, strokeLinecap: "round"},
                                        parent: {border: "1px solid #ccc"}
                                    }}
                                    data={this.state.total}
                                    minDomain={{y: 0}}
                                />
                                <VictoryLine
                                    name={'active-cases'}
                                    interpolation="natural"
                                    height={100}
                                    animate={{
                                        duration: 1000,
                                        onLoad: {duration: 1000}
                                    }}
                                    style={{
                                        data: {stroke: "#3da0d5", strokeWidth: 2, strokeLinecap: "round"},
                                        parent: {border: "1px solid #ccc"}
                                    }}
                                    data={this.state.active}
                                    minDomain={{y: 0}}
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
                                        parent: {border: "1px solid #ccc"}
                                    }}
                                    data={this.state.recovered}
                                    minDomain={{y: 0}}
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
                                        parent: {border: "1px solid #ccc"}
                                    }}
                                    data={this.state.death}
                                    minDomain={{y: 0}}
                                />
                                <VictoryAxis dependentAxis
                                             tickCount={6}
                                             style={{
                                                 axis: {
                                                     stroke: '#636363'
                                                 },
                                             }}
                                             tickLabelComponent={<VictoryLabel style={{fontSize: '10px'}} x={30}/>}
                                />
                                <VictoryAxis tickCount={10}
                                             tickFormat={(x) => (new Date(x).getDate()) + '/' + (new Date(x).getMonth() + 1)}
                                             tickLabelComponent={<VictoryLabel style={{fontSize: '10px'}} y={185}/>}
                                             style={{
                                                 axis: {
                                                     stroke: '#636363'
                                                 }
                                             }}/>
                                <VictoryLegend x={35} y={205}
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
        )
    }

}
