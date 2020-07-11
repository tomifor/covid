import React from "react";
import {VictoryChart, VictoryAxis, VictoryBar, VictoryLabel} from "victory";
import {DATA} from "../../data/data";
import ChartContainer from "./ChartContainer";


export default class SmConfirmedChart extends React.Component {

    constructor(props) {
        super(props);
        const last = DATA[0];
        const parsedDate = [
            {x: "Recuperados", y: last.cases.cured, color: "#3DB085"},
            {x: "Sin necesidad \n de internación", y: last.cases.goodStatus, color: "#30A0DB"},
            {x: "Internadas \n en el \n municipio", y: last.cases.insideHospitalized, color: "#FBCF4A"},
            {x: "Internadas \n fuera del \n municipio", y: last.cases.outsideHospitalized, color: "#844F9B"},
            {x: "Fallecidas", y: last.cases.dead, color: "#E95B54"},
        ];

        if (last.cases.pendingInformation) {
            parsedDate.push({x: 'Información \n pendiente', y: last.cases.pendingInformation, color: '#ff0ef2'});
        }

        this.state = {
            total: last.cases.total,
            data: parsedDate,
        }
    }

    render() {
        return (
            <ChartContainer customClass={'confirmed-chart'} title={'Confirmados: ' + this.state.total}>
                <VictoryChart
                    height={290}
                    domainPadding={{x: 18, y: [0, 5]}}
                    padding={{top: 25, bottom: 50, right: 15, left: 30}}>
                    <VictoryBar
                        style={{data: {fill: ({datum}) => datum.color}}}
                        data={this.state.data}
                        scale={{x: 'linear', y: 'linear'}}
                        minDomain={{y: 0}}
                        alignment="middle"
                        barWidth={25}
                        labels={({datum}) => datum.y}
                        animate={{
                            duration: 2000,
                            onLoad: {duration: 1000}
                        }}
                    />
                    <VictoryAxis dependentAxis
                                 tickLabelComponent={<VictoryLabel style={{fontSize: '12px'}} x={24}/>}
                                 style={{
                                     axis: {
                                         stroke: '#636363'
                                     }
                                 }}/>
                    <VictoryAxis
                        tickLabelComponent={<VictoryLabel style={{fontSize: '12px'}} y={241}/>}
                        style={{
                            axis: {
                                stroke: '#636363'
                            },
                            tickLabels: {fontSize: 12, padding: 5}
                        }}/>
                </VictoryChart>
            </ChartContainer>
        )
    }

}
