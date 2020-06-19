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
            <Modal show={this.props.show}
                   backdrop={this.props.backdrop}
                   centered
                   size={this.props.size}
                   onHide={this.onClose}
                   dialogClassName={this.props.customClass}>
                <StyleWrapper>
                    {this.props.showHeader ?
                        <Modal.Header closeButton>
                            <Modal.Title>{this.props.title}</Modal.Title>
                        </Modal.Header> : null
                    }
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
    showHeader: true,
    closeButton: true,
    modalFooter: true,
    backdrop: true,
    actionButton: false,
    actionButtonLabel: 'Aceptar',
    size: 'lg'
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
    background-color: ${props => props.theme.modal.background};
    color: ${props => props.theme.modal.color};
  }
  button span { 
    color: ${props => props.theme.modal.color};
  }
  .source, .designed-by {
    a {
        color: ${props => props.theme.modal.color};
    }
   }
`;
