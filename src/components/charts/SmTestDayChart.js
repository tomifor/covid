import React from "react";
import {DATA} from "../../data/data";
import {VictoryAxis, VictoryBar, VictoryChart, VictoryLabel} from "victory";
import styled from "@emotion/styled";
import {Form} from "react-bootstrap";

class SmTestDayChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {daysAmount: 30, data: [], filtered: [], loading: true};
    }

    componentDidMount() {
        this.processData();
    }


    processData() {
        const test = DATA.map((day, index) => {
            if (index === DATA.length - 1) {
                return {x: day.date, y: day.dismiss + day.cases.total}
            } else {
                return {x: day.date, y: this.getTestAmount(index)}
            }
        });
        this.setState({data: test, filtered: test.slice(0, this.state.daysAmount).reverse(), loading: false});
    }

    getTestAmount(index) {
        const today = DATA[index];
        const yesterday = DATA[index + 1];
        return (today.dismiss + today.cases.total) - (yesterday.dismiss + yesterday.cases.total);
    }

    filterData = (daysAmount) => {
        this.setState({filtered: this.state.data.slice(0, daysAmount).reverse()});
    }

    getDateFormatted(datetime) {
        const date = datetime.toString().split('T')[0].split('-');
        const day = date[2];
        const month = monthNames[parseInt(date[1]) - 1];
        return (parseInt(day) < 10 ? day.substring(1, 2) : day) + ' ' + month;
    }

    render() {
        return (
            <StyleWrapper>
                <div className={'chart-container sm-test-chart'}>
                    <div className={'chart-header'}>
                        <h3>Testeos por día</h3>
                        <Form.Group controlId="days">
                            <Form.Control as="select" defaultValue={30} onChange={(event) => this.filterData(event.target.value)}>
                                <option value={60}>Últimos 60 días</option>
                                <option value={30}>Últimos 30 días</option>
                                <option value={15}>Últimos 15 días</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                    <VictoryChart height={200}
                                  domainPadding={{x: 10, y: [0, 5]}}
                                  padding={{top: 10, bottom: 50, right: 10, left: 18}}
                                  alignment="start"
                                  scale={{x: "time"}}>
                        {!this.state.loading ?
                            <VictoryBar
                                style={{data: {fill: "#ff932a"}}}
                                data={this.state.filtered}
                                scale={{x: 'linear', y: 'linear'}}
                                minDomain={{y: 0}}
                                alignment="start"
                                height={100}
                                barWidth={4}
                                labelComponent={<VictoryLabel dy={-2} dx={2} style={{fontSize: '7px'}}/>}
                                labels={({datum}) => datum.y > 7 ? datum.y : ''}
                                animate={{
                                    duration: 1000,
                                    onLoad: {duration: 1000}
                                }}
                            />
                            : null}
                        <VictoryAxis dependentAxis
                                     tickCount={10}
                                     tickLabelComponent={<VictoryLabel style={{fontSize: '8px'}} x={15}/>}
                                     style={{
                                         axis: {
                                             stroke: '#636363'
                                         }
                                     }}/>
                        <VictoryAxis
                            tickCount={30}
                            tickFormat={v => this.getDateFormatted(v)}
                            style={{
                                axis: {
                                    stroke: '#636363'
                                }
                            }}
                            tickLabelComponent={<VictoryLabel dy={-7} dx={4} angle={90} style={{fontSize: '8px'}}/>}
                        />
                    </VictoryChart>
                </div>
            </StyleWrapper>
        )
    }
}

export default SmTestDayChart;

const StyleWrapper = styled("div")`
  .chart-container {
    border: ${props => props.theme.border};
    
  }
  .chart-header > h3 {
        color: ${props => props.theme.text};
    }
  select.form-control {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
  }
`;


const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
