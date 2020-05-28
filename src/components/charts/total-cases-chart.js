import React from "react";
import {VictoryLine, VictoryChart, VictoryAxis} from 'victory';
import {DATA} from "../../data";

export default class TotalCasesChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: null};
    }

    componentDidMount() {
        const values = DATA.map(item => ({x: new Date(Date.parse(item.date)), y: item.cases.total})).reverse();
        this.setState({data: values});
    }

    render() {
        return (
            <div className={'chart-container'}>
                <h3 className={'chart-title'}>Casos totales</h3>
                <VictoryChart height={300}>
                    <VictoryLine
                        name={'total-cases'}
                        interpolation="natural"
                        animate={{
                            duration: 2000,
                            onLoad: {duration: 1000}
                        }}
                        style={{
                            data: {stroke: "#a23dd5", strokeWidth: 3, strokeLinecap: "round" },
                            parent: {border: "1px solid #ccc"}
                        }}
                        data={this.state.data}
                        height={300}
                        minDomain={{y: 0}}
                        scale={{x: 'time', y: 'linear'}}
                        padding={{ top: 10, bottom: 80, right: 0, left: 20 }}
                    />
                    <VictoryAxis dependentAxis />
                    <VictoryAxis tickCount={8} tickFormat={(x) => (new Date(x).getDate()) + '/' + (new Date(x).getMonth() + 1)}/>
                </VictoryChart>
            </div>
        )
    }
}
