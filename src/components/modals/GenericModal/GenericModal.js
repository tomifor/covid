import React from "react";
import {Modal} from "react-bootstrap";
import styled from "@emotion/styled";


class GenericModal extends React.Component {

    onClose = () => {
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    render() {
        return (
            <Modal show={this.props.show} centered onHide={this.onClose} dialogClassName={this.props.customClass}>
                <StyleWrapper>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {this.props.children}
                    </Modal.Body>

                    {this.props.modalFooter ?
                        <Modal.Footer>
                            {this.props.closeButton ?
                                <button className={'btn btn-secondary'} onClick={this.onClose}>Cerrar</button> : null}
                            {this.props.actionButton ?
                                <button className={'btn btn-primary'}>{this.props.actionButtonLabel}</button> : null}
                        </Modal.Footer>
                        : null
                    }
                </StyleWrapper>
            </Modal>
        );
    }
}

GenericModal.defaultProps = {
    show: false,
    closeButton: true,
    modalFooter: true,
    actionButton: false,
    actionButtonLabel: 'Aceptar'
}

export default GenericModal;

const StyleWrapper = styled("div")`
  .modal-body, .modal-footer {
    background-color: ${props => props.theme.modal.background};
    border-color: ${props => props.theme.modal.border};
    color: ${props => props.theme.modal.color};
  }
  .modal-header {
    border-color: ${props => props.theme.modal.border};
  }
  .source, .designed-by {
    a {
        color: ${props => props.theme.modal.color};
    }
   }
`;
