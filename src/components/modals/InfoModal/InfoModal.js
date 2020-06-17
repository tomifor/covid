import React from "react";
import GenericModal from "../GenericModal/GenericModal";
import {Tab, Tabs} from "react-bootstrap";
import SymptomsModal from "../SymptomsModal/SymptomsModal";

class InfoModal extends React.Component {


    render() {
        return (
            <GenericModal show={this.props.show} showHeader={false}
                          backdrop={'static'}
                          customClass={'info-modal-container'}
                          onClose={this.props.onClose}>
                <Tabs id="info-tabs" defaultActiveKey={''}>
                    <Tab eventKey="" title="Recomendaciones">

                    </Tab>
                    <Tab eventKey="symptoms" title="Síntomas">
                        <SymptomsModal/>
                    </Tab>
                </Tabs>
            </GenericModal>
        )
    }

}

export default InfoModal;
