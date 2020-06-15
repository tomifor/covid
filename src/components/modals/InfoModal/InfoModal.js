import React from "react";
import GenericModal from "../GenericModal/GenericModal";

class InfoModal extends React.Component {


    render() {
        return (
            <GenericModal show={this.props.show} title={'Información importante'}
                          customClass={'info-modal-container'}
                          onClose={this.props.onClose}>

            </GenericModal>
        )
    }

}

export default InfoModal;
