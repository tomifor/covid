import React from "react";
import GenericModal from "../GenericModal/GenericModal";
import {Tab, Tabs} from "react-bootstrap";
import SymptomsModal from "../SymptomsModal/SymptomsModal";
import './info-modal.scss';
import Advice from "../../Advices/Advice";
import styled from "@emotion/styled";

class InfoModal extends React.Component {


    render() {
        return (
            <GenericModal show={this.props.show} showHeader={false}
                          backdrop={'static'}
                          customClass={'info-modal-container'}
                          onClose={this.props.onClose}>
                <StyleWrapper>
                    <div className={'info-modal-container'}>
                        <Tabs id="info-tabs" defaultActiveKey={this.props.defaultActiveKey}>
                            <Tab eventKey="advice" title="Recomendaciones">
                                <Advice/>
                                <p className={'source'}>Fuente:&nbsp;
                                    <a target={'_blank'} rel={'noopener noreferrer'}
                                       href={'https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/advice-for-public'}>OMS</a>
                                </p>
                            </Tab>
                            <Tab eventKey="symptoms" title="Síntomas">
                                <SymptomsModal/>
                                <p className={'source'}>Fuente:&nbsp;
                                    <a target={'_blank'} rel={'noopener noreferrer'}
                                       href={'https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/advice-for-public/q-a-coronaviruses'}>OMS</a>
                                </p>
                            </Tab>
                        </Tabs>
                    </div>
                    <p className={'designed-by'}>Íconos diseñados por <a target={'_blank'} rel={'noopener noreferrer'}
                                                                         href={'https://www.flaticon.es/autores/monkik'}>Monkik</a>
                    </p>
                </StyleWrapper>
            </GenericModal>
        )
    }

}

export default InfoModal;

InfoModal.defaultProps = {
    defaultActiveKey: 'advice'
}


const StyleWrapper = styled("div")`
    .nav-link {
        color: ${props => props.theme.text};
    }
`;
