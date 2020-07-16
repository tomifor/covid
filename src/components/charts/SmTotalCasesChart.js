import React from "react";
import {VictoryLine, VictoryChart, VictoryAxis, VictoryLegend, VictoryLabel, VictoryZoomContainer} from 'victory';
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
            max: maxValue + 10,
            legend: [
                {name: 'Totales', color: '#a23dd5'},
                {name: 'Activos', color: '#3da0d5'},
                {name: 'Recuperados', color: '#3dd568'},
                {name: 'Fallecidos', color: '#e21212'},
            ]
        };
    }


    render() {
        const {total, active, death, healthy, max} = this.state;
        return (
            <ChartContainer customClass={'total-cases'} title={'Casos'}>
                <VictoryChart height={300}
                              domain={{y: [0, max]}}
                              // containerComponent={
                              //     <VictoryZoomContainer/>
                              // }
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
                        data={total}
                        height={300}
                        minDomain={{y: 0}}
                        scale={{x: 'time', y: 'linear'}}
                        labels={({datum}) => total && total[total.length - 1].y === datum.y ? datum.y : ''}
                        labelComponent={<VictoryLabel renderInPortal dy={-5} dx={-10} style={{fontSize: 12}}/>}
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
                        labels={({datum}) => active && active[active.length - 1].y === datum.y ? datum.y : ''}
                        labelComponent={<VictoryLabel renderInPortal dy={-5} dx={-10} style={{fontSize: 12}}/>}
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
                        labels={({datum}) => healthy && healthy[healthy.length - 1].y === datum.y ? datum.y : ''}
                        labelComponent={<VictoryLabel renderInPortal dy={-5} dx={-7} style={{fontSize: 12}}/>}
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
                        labels={({datum}) => death && death[death.length - 1].y === datum.y ? datum.y : ''}
                        // labels={({datum}) => console.log(datum.x)}
                        labelComponent={<VictoryLabel renderInPortal dy={-5} dx={-5} style={{fontSize: 12}}/>}
                    />
                    <VictoryAxis dependentAxis
                                 tickCount={7}
                                 tickLabelComponent={<VictoryLabel style={{fontSize: '12px'}} x={30}/>}
                                 style={{
                                     axis: {
                                         stroke: '#636363'
                                     }
                                 }}/>
                    <VictoryAxis tickCount={8}
                                 tickFormat={(x) => (new Date(x).getDate()) + '/' + (new Date(x).getMonth() + 1)}
                                 tickLabelComponent={<VictoryLabel style={{fontSize: '12px'}} y={264}/>}
                                 style={{
                                     axis: {
                                         stroke: '#636363'
                                     }
                                 }}/>
                    <VictoryLegend x={45} y={20}
                                   gutter={10}
                                   symbolSpacer={5}
                                   className={'confirmed-legend'}
                                   orientation="horizontal"
                                   style={{
                                       labels: {fontWeight: 400, fontSize: 12},
                                   }}
                                   colorScale={this.state.legend.map(elem => elem.color)}
                                   data={this.state.legend.map(elem => ({name: elem.name}))}
                    />
                </VictoryChart>
            </ChartContainer>
        )
    }
}
