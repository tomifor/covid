import React from "react";
import './charts.scss';
import styled from "@emotion/styled";

export default class ChartContainer extends React.Component {

    render() {
        return (
            <StyleWrapper>
                <div className={'chart-container ' + this.props.customClass}>
                    <div className={'chart-header-container'}>
                        <h3 className={'chart-title'}>{this.props.title}</h3>
                        {this.props.subtitle && <h4 className={'chart-subtitle'}>{this.props.subtitle}</h4>}
                    </div>
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
