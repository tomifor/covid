import React from "react";
import './emergency-alert.scss';
import InfoModal from "../../modals/InfoModal/InfoModal";

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
                    <p>de <span className={'button btn-symptoms'} onClick={() => this.showSymptoms()}>síntomas</span>
                    </p>
                </div>
                <div className={'phone-number'}>
                    <p>Llamá al 148</p>
                </div>
                <InfoModal show={showModal} defaultActiveKey={'symptoms'}
                           onClose={() => this.setState({showModal: false})}/>

                {/*<GenericModal show={showModal} title={'Síntomas COVID-19'}*/}
                {/*              customClass={'symptoms-modal-container'}*/}
                {/*              onClose={() => this.setState({showModal: false})}>*/}
                {/*    <SymptomsModal/>*/}
                {/*</GenericModal>*/}
            </div>
        )
    }

}

export default EmergencyAlert;
