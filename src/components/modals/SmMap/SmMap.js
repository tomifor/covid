import React from "react";
import GenericModal from "../GenericModal/GenericModal";

class SmMap extends React.Component {

    render() {
        return (
            <GenericModal show={this.props.show}
                          title={'Mapa de San Miguel'}
                          customClass={'info-modal-container'}
                          onClose={this.props.onClose}>
                <div className={'map-container'}>
                    <iframe
                        title={'San Miguel Map'}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105152.03846406893!2d-58.760905961230165!3d-34.553524952599645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbc8711bf48cb%3A0x5e2d26e326844208!2sSan%20Miguel%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1592530336479!5m2!1ses!2sar"
                        height="450" frameBorder="0" style={{border: 0}} allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"/>
                </div>
            </GenericModal>
        )
    }
}

export default SmMap;
