import React from "react";
import {VictoryPie, VictoryChart, VictoryLegend, VictoryAxis} from "victory";
import {DATA} from "../../data/data";


export default class ConfirmedChart extends React.Component {

    constructor(props) {
        super(props);
        const last = DATA[0];
        this.state = {
            total: last.cases.total,
            colors: ["#3DB085", "#30A0DB", "#FBCF4A", "#844F9B", "#E95B54"],
            data: [
                {x: "Alta definitiva", y: last.cases.cured},
                {x: "Sin necesidad \n de internación", y: last.cases.goodStatus},
                {x: "Internadas en \n el municipio", y: last.cases.insideHospitalized},
                {x: "Internadas fuera \n del municipio", y: last.cases.outsideHospitalized},
                {x: "Fallecidas", y: last.cases.dead},
            ]
        }
    }


    render() {
        return (
            <div className={'chart-container'}>
                <h3 className={'chart-title'}>Confirmados: {this.state.total} </h3>
                <VictoryChart
                    height={300}
                    padding={{top: 20, bottom: 30, right: 0, left: 100}}>
                    <VictoryPie
                        height={260}
                        labelRadius={95}
                        colorScale={this.state.colors}
                        data={this.state.data}
                        labels={({datum}) => datum.y}
                        style={{
                            labels: {fontWeight: 600, fontSize: '18px'}
                        }}
                    />
                    <VictoryLegend x={10} y={30}
                                   title={'Personas'}
                                   gutter={20}
                                   orientation="vertical"
                                   style={{
                                       title: {fontWeight: 600, fontSize: '16px'}
                                   }}
                                   colorScale={this.state.colors}
                                   data={this.state.data.map(elem => ({name: elem.x}))}
                    />
                    <VictoryAxis dependentAxis style={{
                        axis: {stroke: "transparent"},
                        ticks: {stroke: "transparent"},
                        tickLabels: {fill: "transparent"}
                    }}/>
                    <VictoryAxis style={{
                        axis: {stroke: "transparent"},
                        ticks: {stroke: "transparent"},
                        tickLabels: {fill: "transparent"}
                    }}/>
                </VictoryChart>
            </div>
        )
    }

}
