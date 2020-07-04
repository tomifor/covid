import React from "react";
import {VictoryAxis, VictoryBar, VictoryChart} from 'victory';
import {DATA} from "../../data/data";
import ChartContainer from "./ChartContainer";


export default class SmDayCases extends React.Component {

    constructor(props) {
        super(props);
        const values = DATA.map(item => ({
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
            <ChartContainer customClass={'day-cases'} title={'Casos por día'}>
                <VictoryChart height={300}
                              domainPadding={{x: 5, y: [0, 5]}}
                              domain={{y: [0, this.state.max]}}
                              padding={{top: 20, bottom: 40, right: 10, left: 35}}
                              alignment="start"
                              scale={{x: "time"}}>
                    <VictoryBar
                        style={{data: {fill: "#ff932a"}}}
                        data={this.state.data}
                        scale={{x: 'time', y: 'linear'}}
                        minDomain={{y: 0}}
                        alignment="start"
                        barWidth={4}
                        labels={({datum}) => datum.y > 30 ? datum.y : ''}
                        animate={{
                            duration: 2000,
                            onLoad: {duration: 1000}
                        }}
                    />
                    <VictoryAxis dependentAxis tickCount={6} style={{
                        axis: {
                            stroke: '#636363'
                        }
                    }}/>
                    <VictoryAxis tickCount={3} tickFormat={v => month[new Date(v).getMonth()]} style={{
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
