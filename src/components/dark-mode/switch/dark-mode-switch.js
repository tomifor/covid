import React from "react";
import './dark-mode-switch.scss';
import styled from "@emotion/styled";
import sun from '../../../assets/dom.svg'
import moon from '../../../assets/luna.svg'


export default class DarkModeSwitch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {darkMode: props.selected ? props.selected : false}
    }
    componentDidMount() {
        if(this.props.selected) {
            console.log('entraaaa ')
            this.setState({darkMode: this.props.selected});
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.selected !== prevProps.selected) {
            this.setState({darkMode: this.props.selected ? this.props.selected : false});
        }
    }

    toggleSwitch() {
        this.setState({darkMode: !this.state.darkMode});
        if (this.props.onChange) {
            this.props.onChange(!this.state.darkMode);
        }
    }

    render() {
        return (
            <StyleWrapper>
                <div id={'switch'}>
                    <label htmlFor="switch-input" className="switchBtn">
                        <input id="switch-input" type="checkbox" defaultChecked={!this.state.darkMode}
                               value={!this.state.darkMode}
                               onClick={() => this.toggleSwitch()}/>
                        <div className="slide round"><img className={'dark-mode-icon'} src={this.state.darkMode ? sun : moon} alt={'dark-mode'}/></div>
                    </label>
                </div>
            </StyleWrapper>
        )
    }
}

const StyleWrapper = styled("div")`
  .slide:before {
    background-color: ${props => props.theme.inputSwitch.color};
  }
  .slide {
   background-color: ${props => props.theme.inputSwitch.background};
  }
`;
