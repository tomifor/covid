import React from "react";
import {VictoryLine, VictoryChart, VictoryAxis} from 'victory';
import {DATA} from "../../data/data";

export default class TotalCasesChart extends React.Component {
    constructor(props) {
        super(props);
        const values = DATA.map(item => ({x: new Date(Date.parse(item.date)), y: item.cases.total})).reverse();
        const maxValue = Math.max.apply(Math, values.map((o) => {
            return o.y;
        }));
        this.state = {data: values, max: maxValue + 10};
    }


    render() {
        return (
            <div className={'chart-container total-cases'}>
                <h3 className={'chart-title'}>Casos totales</h3>
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
                        data={this.state.data}
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
            </div>
        )
    }
}
