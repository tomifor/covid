import React from "react";
import {VictoryBar, VictoryChart, VictoryLabel, VictoryAxis} from "victory";


export default class LethalityChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {x: 1, y: 10},
            ],
            sanmiguel: 7.1,
            argentina: 3.5,
            caba: 4.3,
            provincia: 5.2,
        };
    }


    render() {
        return (
            <div className={'chart-container'}>
                <h3 className={'chart-title'}>Letalidad </h3>
                <svg style={{height: 0}}>
                    <defs>
                        <linearGradient id="barGradient">
                            <stop offset="0%" stopColor="#0B486B"/>
                            <stop offset="100%" stopColor="#F56217"/>
                        </linearGradient>
                    </defs>
                </svg>
                <VictoryChart height={300}
                              padding={{top: 10, bottom: 160, right: 40, left: 40}}>
                    <VictoryBar
                        horizontal
                        domain={{x: [1, 5], y: [0, 10]}}
                        height={300}
                        style={{data: {fill: "url(#barGradient)", width: 25}}}
                        alignment="start"
                        data={this.state.data}
                        maxDomain={{x: 5, y: 10}}
                        minDomain={{x: 0}}
                        labels={({datum}) => `${datum.y}%`}
                        labelComponent={<VictoryLabel dy={-10}/>}
                    />
                    <VictoryAxis dependentAxis/>
                    <VictoryAxis
                        style={{
                            axis: {stroke: "transparent"},
                            ticks: {stroke: "transparent"},
                            tickLabels: {fill: "transparent"}
                        }}
                    />
                </VictoryChart>
            </div>
        )
    }
}
