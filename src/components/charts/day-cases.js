import React from "react";
import {VictoryAxis, VictoryBar, VictoryChart} from 'victory';
import {DATA} from "../../data/data";


export default class DayCases extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: null}
    }


    componentDidMount() {
        const values = DATA.map(item => ({x: new Date(Date.parse(item.date)), y: item.cases.newCases})).reverse();
        console.log(values);
        this.setState({data: values});
    }

    render() {
        return (
            <div className={'chart-container'}>
                <h3 className={'chart-title'}>Casos por día</h3>
                <VictoryChart height={300}
                              domainPadding={{ x: 50, y: [0, 5] }}
                              padding={{top: 10, bottom: 40, right: 10, left: 35}}
                              scale={{ x: "time" }}>
                    <VictoryBar
                        style={{ data: { fill: "#ff932a" } }}
                        data={this.state.data}
                        scale={{x: 'time', y: 'linear'}}
                        minDomain={{y: 0}}
                        animate={{
                            duration: 2000,
                            onLoad: {duration: 1000}
                        }}
                    />
                    <VictoryAxis dependentAxis />
                    <VictoryAxis tickCount={3} tickFormat={v => month[new Date(v).getMonth()]}/>
                </VictoryChart>
            </div>
        )
    }
}

const month = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
