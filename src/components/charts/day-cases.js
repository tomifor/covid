import React from "react";
import {VictoryAxis, VictoryBar, VictoryChart} from 'victory';
import {DATA} from "../../data/data";


export default class DayCases extends React.Component {

    constructor(props) {
        super(props);
        const values = DATA.map(item => ({x: new Date(Date.parse(item.date)).getTime(), y: item.cases.newCases})).reverse();
        const maxValue = Math.max.apply(Math, values.map((o) => { return o.y; }));
        console.log(maxValue);
        this.state = {data: values, max: maxValue + 2}
    }

    render() {
        return (
            <div className={'chart-container'}>
                <h3 className={'chart-title'}>Casos por día</h3>
                <VictoryChart height={300}
                              domainPadding={{ x: 50, y: [0, 5] }}
                              domain={{y: [0, this.state.max]}}
                              padding={{top: 20, bottom: 40, right: 10, left: 35}}
                              scale={{ x: "time" }}>
                    <VictoryBar
                        style={{ data: { fill: "#ff932a" } }}
                        data={this.state.data}
                        scale={{x: 'time', y: 'linear'}}
                        minDomain={{y: 0}}
                        labels={({ datum }) => datum.y > 4 ? datum.y : ''}
                        animate={{
                            duration: 2000,
                            onLoad: {duration: 1000}
                        }}
                    />
                    <VictoryAxis dependentAxis tickCount={6} />
                    <VictoryAxis tickCount={3} tickFormat={v => month[new Date(v).getMonth()]}/>
                </VictoryChart>
            </div>
        )
    }
}

const month = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
