import React from "react";
import './emergency-alert.scss';
import SymptomsModal from "../../modals/SymptomsModal/SymptomsModal";

class EmergencyAlert extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showModal: false};
    }

    showSymptoms = () => {
        this.setState({showModal: true});
    }

    render() {
        const {showModal} = this.state;
        return (
            <div id={'emergency-alert'} className={'alert-container'}>
                <div className={'message'}>
                    <p>Ante la presencia</p>
                    <p>de <span className={'button'} onClick={() => this.showSymptoms()}>síntomas</span></p>
                </div>
                <div className={'phone-number'}>
                    <p>Llamá al 148</p>
                </div>
                <SymptomsModal show={showModal}
                              onClose={() => this.setState({showModal: false})}/>
            </div>
        )
    }

}

export default EmergencyAlert;
