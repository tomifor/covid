import React from "react";
import GenericModal from "../GenericModal/GenericModal";
import './symptoms-modal.scss';
import tos from '../../../assets/tos.svg'
import fatiga from '../../../assets/fatiga.svg'
import fiebre from '../../../assets/fiebre.svg'
import {Col, Row} from "react-bootstrap";

class SymptomsModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            symptoms: [
                {icon: fiebre, label: 'Fiebre'},
                {icon: tos, label: 'Tos seca'},
                {icon: fatiga, label: 'Cansancio'},
            ]
        }
    }

    render() {
        return (
            <GenericModal show={this.props.show} title={'Síntomas COVID-19'}
                          customClass={'symptoms-modal-container'}
                          onClose={this.props.onClose}>
                <div className={'symptoms-info'}>
                    <section className={'main-symptoms'}>
                        <h2 className={'subtitle'}>Síntomas habituales</h2>
                        <div>
                            {this.state.symptoms.map(elem => (
                                <div key={elem.label} className={'symptom box'}>
                                    <img className={'symptom-icon'} src={elem.icon} alt={elem.label}/>
                                    <p>{elem.label}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className={'other-symptoms'}>
                        <h2 className={'subtitle'}>Síntomas menos frecuentes</h2>
                        <Row>
                            {otherSymptoms.map(elem => (
                                <Col key={elem} md={6}>
                                    <p className={'symptom'}>{elem}</p>
                                </Col>
                            ))}
                        </Row>
                    </section>
                    <p className={'source'}>Fuente:&nbsp;
                        <a target={'_blank'} rel={'noopener noreferrer'}
                           href={'https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/advice-for-public/q-a-coronaviruses'}>OMS</a>
                    </p>
                    <p className={'designed-by'}>Íconos diseñados por <a target={'_blank'} rel={'noopener noreferrer'}
                                                                         href={'https://www.flaticon.es/autores/monkik'}>Monkik</a>
                    </p>
                </div>
            </GenericModal>

        )
    }
}

export default SymptomsModal;


const otherSymptoms = ['Dolores y molestias', 'Congestión nasal', 'Dolor de cabeza', 'Dolor de garganta', 'Conjuntivitis', 'Diarrea', 'Pérdida del gusto', 'Pérdida del olfato']
