import React from "react";
import './dark-mode-switch.scss';
import {useTheme} from "../../../theme/ThemeContext";


export default class DarkModeSwitch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {darkMode: props.selected ? props.selected : false}
    }

    toggleSwitch() {
        this.setState({darkMode: !this.state.darkMode});
        if(this.props.onChange){
            this.props.onChange(!this.state.darkMode);
        }
    }

    render() {
        return (
            <div id={'switch'}>
                <label htmlFor="switch-input" className="switchBtn">
                    <input id="switch-input" type="checkbox"  defaultChecked={!this.state.darkMode}
                           value={!this.state.darkMode}
                           onClick={() => this.toggleSwitch()}/>
                    <div className="slide round">On</div>
                </label>
            </div>
        )
    }
}
