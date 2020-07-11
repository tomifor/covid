import React from "react";
import {VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryZoomContainer} from 'victory';
import {DATA} from "../../data/data";
import ChartContainer from "./ChartContainer";


export default class SmDayCases extends React.Component {

    constructor(props) {
        super(props);
        const filteredData = DATA.slice(0, 30);
        const values = filteredData.map(item => ({
            x: new Date(Date.parse(item.date)).getTime(),
            y: item.cases.newCases
        })).reverse();
        const maxValue = Math.max.apply(Math, values.map((o) => {
            return o.y;
        }));
        this.state = {data: values, max: maxValue + 2}
    }

    render() {
        return (
            <ChartContainer customClass={'day-cases'} title={'Casos por día'} subtitle={'(Últimos 30 días)'}>
                <VictoryChart height={300}
                              domainPadding={{x: 5, y: [0, 5]}}
                              domain={{y: [0, this.state.max]}}
                              padding={{top: 20, bottom: 40, right: 10, left: 20}}
                              alignment="start"
                              scale={{x: "time"}}>
                    <VictoryBar
                        style={{data: {fill: "#ff932a"}}}
                        data={this.state.data}
                        scale={{x: 'time', y: 'linear'}}
                        minDomain={{y: 0}}
                        alignment="start"
                        barWidth={4}
                        labelComponent={<VictoryLabel dy={-2} dx={2} style={{fontSize: '12px'}}/>}
                        labels={({datum}) => datum.y > 1 ? datum.y : ''}
                        animate={{
                            duration: 2000,
                            onLoad: {duration: 1000}
                        }}
                        events={[{
                            target: "data",
                            eventHandlers: {
                                onMouseOver: () => {
                                    return [
                                        {
                                            target: "data",
                                            mutation: () => ({style: {fill: "#d07924"}})
                                        }, {
                                            target: "labels",
                                            mutation: () => ({active: true})
                                        }
                                    ];
                                },
                                onMouseOut: () => {
                                    return [
                                        {
                                            target: "data",
                                            mutation: () => {
                                            }
                                        }, {
                                            target: "labels",
                                            mutation: () => ({active: false})
                                        }
                                    ];
                                }
                            }
                        }]}
                    />
                    <VictoryAxis dependentAxis
                                 tickLabelComponent={<VictoryLabel style={{fontSize: '12px'}} x={15}/>}
                                 tickCount={6} style={{
                        axis: {
                            stroke: '#636363'
                        }
                    }}/>
                    <VictoryAxis tickCount={3}
                                 tickLabelComponent={<VictoryLabel style={{fontSize: '12px'}} y={264}/>}
                        // tickFormat={v => month[new Date(v).getMonth()]}
                                 style={{
                                     axis: {
                                         stroke: '#636363'
                                     }
                                 }}/>
                </VictoryChart>
            </ChartContainer>
        )
    }
}

const month = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
