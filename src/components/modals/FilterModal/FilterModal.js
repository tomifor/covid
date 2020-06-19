import React from "react";
import GenericModal from "../GenericModal/GenericModal";

class FilterModal extends React.Component {


    render() {
        return (
            <GenericModal show={this.props.show}
                          title={'Filtrar'}
                          customClass={'info-modal-container'}
                          onClose={this.props.onClose}>
                <h1>test</h1>
            </GenericModal>
        )
    }

}

export default FilterModal;
