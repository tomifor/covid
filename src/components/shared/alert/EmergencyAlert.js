import React from "react";
import './emergency-alert.scss';

class EmergencyAlert extends React.Component {

    render() {
        return (
            <div id={'emergency-alert'} className={'alert-container'}>
                <div className={'message'}>
                    <p>Ante la presencia</p>
                    <p>de síntomas</p>
                </div>
                <div className={'phone-number'}>
                    <p>Llamá al 148</p>
                </div>
            </div>
        )
    }

}

export default EmergencyAlert;
