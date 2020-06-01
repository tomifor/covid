import React from "react";
import './charts.scss';
import styled from "@emotion/styled";

export default class ChartContainer extends React.Component {

    render() {
        return (
            <StyleWrapper>
                <div className={'chart-container ' + this.props.customClass}>
                    <h3 className={'chart-title'}>{this.props.title}</h3>
                    {this.props.children}
                </div>
            </StyleWrapper>
        )
    }
}

const StyleWrapper = styled("div")`
  .chart-container {
    border: ${props => props.theme.border};
    .chart-title {
        color: ${props => props.theme.text};
    }
  }
`;
