import React from "react";
import {VictoryChart, VictoryAxis, VictoryBar} from "victory";
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

        if(last.cases.pendingInformation) {
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
                    height={300}
                    domainPadding={{x: 18, y: [0, 5]}}
                    padding={{top: 25, bottom: 50, right: 15, left: 35}}>
                    <VictoryBar
                        style={{data: {fill: ({ datum }) => datum.color}}}
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
                    {/*<VictoryPie*/}
                    {/*    height={260}*/}
                    {/*    labelRadius={95}*/}
                    {/*    colorScale={this.state.colors}*/}
                    {/*    data={this.state.data}*/}
                    {/*    labels={({datum}) => datum.y}*/}
                    {/*    style={{*/}
                    {/*        labels: {fontWeight: 600, fontSize: '18px'}*/}
                    {/*    }}*/}
                    {/*/>*/}
                    {/*<VictoryLegend x={10} y={30}*/}
                    {/*               title={'Personas'}*/}
                    {/*               gutter={20}*/}
                    {/*               className={'confirmed-legend'}*/}
                    {/*               orientation="horizontal"*/}
                    {/*               style={{*/}
                    {/*                   title: {fontWeight: 600, fontSize: '16px'},*/}
                    {/*               }}*/}
                    {/*               colorScale={this.state.colors}*/}
                    {/*               data={this.state.data.map(elem => ({name: elem.x}))}*/}
                    {/*/>*/}
                    <VictoryAxis dependentAxis style={{
                        axis: {
                            stroke: '#636363'
                        }
                    }}/>
                    <VictoryAxis style={{
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
