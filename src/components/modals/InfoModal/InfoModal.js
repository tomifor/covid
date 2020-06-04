import React from "react";
import './info-modal.scss';
import {Modal} from "react-bootstrap";


class InfoModal extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    {/*<Button variant="secondary">Close</Button>*/}
                    {/*<Button variant="primary">Save changes</Button>*/}
                </Modal.Footer>
            </Modal.Dialog>
        );
    }

}

InfoModal.defaultProps = {
    show: false
}

export default InfoModal;
