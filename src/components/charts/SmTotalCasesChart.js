import React from "react";
import {VictoryLine, VictoryChart, VictoryAxis} from 'victory';
import {DATA} from "../../data/data";
import ChartContainer from "./ChartContainer";

export default class SmTotalCasesChart extends React.Component {
    constructor(props) {
        super(props);
        const totalCases = DATA.map(item => ({x: new Date(Date.parse(item.date)), y: item.cases.total})).reverse();
        const maxValue = Math.max.apply(Math, totalCases.map((o) => {
            return o.y;
        }));

        const activeCases = DATA.map(item => ({
            x: new Date(Date.parse(item.date)),
            y: item.cases.total - item.cases.cured - item.cases.dead
        })).reverse();
        const healthyCases = DATA.map(item => ({x: new Date(Date.parse(item.date)), y: item.cases.cured})).reverse();
        const deathCases = DATA.map(item => ({x: new Date(Date.parse(item.date)), y: item.cases.dead})).reverse();

        this.state = {
            total: totalCases,
            active: activeCases,
            healthy: healthyCases,
            death: deathCases,
            max: maxValue + 10
        };
    }


    render() {
        return (
            <ChartContainer customClass={'total-cases'} title={'Casos'}>
                <VictoryChart height={300}
                              domain={{y: [0, this.state.max]}}
                              padding={{top: 20, bottom: 40, right: 10, left: 35}}>
                    <VictoryLine
                        name={'total-cases'}
                        interpolation="natural"
                        animate={{
                            duration: 2000,
                            onLoad: {duration: 1000}
                        }}
                        style={{
                            data: {stroke: "#a23dd5", strokeWidth: 3, strokeLinecap: "round"},
                            parent: {border: "1px solid #ccc"}
                        }}
                        data={this.state.total}
                        height={300}
                        minDomain={{y: 0}}
                        scale={{x: 'time', y: 'linear'}}
                    />
                    <VictoryLine
                        name={'total-cases'}
                        interpolation="natural"
                        animate={{
                            duration: 2000,
                            onLoad: {duration: 1000}
                        }}
                        style={{
                            data: {stroke: "#30A0DB", strokeWidth: 3, strokeLinecap: "round"},
                            parent: {border: "1px solid #ccc"}
                        }}
                        data={this.state.active}
                        height={300}
                        minDomain={{y: 0}}
                        scale={{x: 'time', y: 'linear'}}
                    />
                    <VictoryLine
                        name={'total-cases'}
                        interpolation="natural"
                        animate={{
                            duration: 2000,
                            onLoad: {duration: 1000}
                        }}
                        style={{
                            data: {stroke: "#3DB085", strokeWidth: 3, strokeLinecap: "round"},
                            parent: {border: "1px solid #ccc"}
                        }}
                        data={this.state.healthy}
                        height={300}
                        minDomain={{y: 0}}
                        scale={{x: 'time', y: 'linear'}}
                    />
                    <VictoryLine
                        name={'total-cases'}
                        interpolation="natural"
                        animate={{
                            duration: 2000,
                            onLoad: {duration: 1000}
                        }}
                        style={{
                            data: {stroke: "#E95B54", strokeWidth: 3, strokeLinecap: "round"},
                            parent: {border: "1px solid #ccc"}
                        }}
                        data={this.state.death}
                        height={300}
                        minDomain={{y: 0}}
                        scale={{x: 'time', y: 'linear'}}
                    />
                    <VictoryAxis dependentAxis style={{
                        axis: {
                            stroke: '#636363'
                        }
                    }}/>
                    <VictoryAxis tickCount={8}
                                 tickFormat={(x) => (new Date(x).getDate()) + '/' + (new Date(x).getMonth() + 1)}
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
