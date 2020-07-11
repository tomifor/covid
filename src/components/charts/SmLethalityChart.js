import React from "react";
import {VictoryBar, VictoryChart, VictoryLabel, VictoryAxis} from "victory";
import {DATA} from "../../data/data";
import {Lethality} from "../../data/extra-data";
import ChartContainer from "./ChartContainer";

export default class SmLethalityChart extends React.Component {

    constructor(props) {
        super(props);

        const last = DATA[0];
        this.state = {
            data: [
                {x: 0, y: MAX},
            ],
            lethality: [
                {name: 'San Miguel', value: ((last.cases.dead / last.cases.total) * 100)},
                {name: 'Argentina', value: Lethality.argentina},
                {name: 'CABA', value: Lethality.caba},
                {name: 'Bs As', value: Lethality.buenosaires}
            ]
        };
    }

    getTickFormat(value) {
        const place = this.state.lethality.find(item => item.value === value).name;
        return value.toFixed(2) + '%\n' + place;
    }

    tickLabelHeight(value) {
        const sorted = this.state.lethality.sort((a, b) => {
            return a.value - b.value;
        });
        const index = sorted.findIndex(item => item.value === value.datum);
        return index % 2 === 0 ? 0 : 40;
    }

    render() {
        return (
            <ChartContainer customClass={'lethality-chart'} title={'Letalidad'}>
                <svg style={{height: 0}}>
                    <defs>
                        <linearGradient id="barGradient">
                            <stop offset="0%" stopColor="#0B486B"/>
                            <stop offset="100%" stopColor="#F56217"/>
                        </linearGradient>
                    </defs>
                </svg>
                <VictoryChart height={265}
                              padding={{top: 10, bottom: 170, right: 40, left: 40}}>
                    <VictoryBar
                        horizontal
                        domain={{x: [0, 5], y: [MIN, MAX]}}
                        height={290}
                        style={{data: {fill: "url(#barGradient)", width: 25}}}
                        alignment="start"
                        data={this.state.data}
                        maxDomain={{x: 5, y: 10}}
                        minDomain={{x: 0, y: 2}}
                        labels={({datum}) => `${datum.y}%`}
                        labelComponent={<VictoryLabel dy={-12} dx={8}/>}
                    />
                    <VictoryAxis dependentAxis
                                 style={{
                                     axis: {stroke: "transparent"},
                                     ticks: {stroke: "grey", size: 10},
                                 }}
                                 tickCount={4}
                                 tickLabelComponent={<VictoryLabel style={{fill: '#11486B'}}
                                                                   dy={(dy) => this.tickLabelHeight(dy)}/>}
                                 tickValues={this.state.lethality.map(item => item.value).sort()}
                                 tickFormat={(t) => this.getTickFormat(t)}
                    />
                    <VictoryAxis
                        tickValues={[0]}
                        tickFormat={(t) => `${MIN}%`}
                        offsetX={45}
                        tickLabelComponent={<VictoryLabel dy={-12}/>}
                        style={{
                            axis: {stroke: "transparent"},
                            ticks: {stroke: "transparent"},
                        }}
                    />
                </VictoryChart>
            </ChartContainer>
        )
    }
}

const MAX = 2.5;
const MIN = 1.5;
