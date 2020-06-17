import React from "react";
import './advice.scss';
import tos from '../../assets/tos.svg'
import distancia from '../../assets/distancia.svg';
import tapaboca from '../../assets/codicioso.svg';
import lavaManos from '../../assets/lava-tus-manos.svg';


class Advice extends React.Component {


    render() {
        return (
            <div className={'advices'}>
                {advices.map((a, index) => (
                        <div key={index} className={'advice'}>
                            <div className={'logo'}>
                                <img src={a.logo} alt={'advice'}/>
                            </div>
                            <div className={'information'}>
                                <h3>{a.title}</h3>
                                <p>{a.description}</p>
                            </div>
                        </div>
                    )
                )}
            </div>
        )
    }
}

export default Advice;


const advices = [
    {
        title: 'Lávese las manos frecuentemente',
        description: 'Lávese las manos con frecuencia con un desinfectante de manos a base de alcohol o con agua y jabón.',
        logo: lavaManos
    },
    {
        title: 'Use tapabocas',
        description: 'El tapaboca es obligatorio para circular y permanecer en espacios públicos. Este debe cubrir la zona de la boca y la nariz. Lavelo rutinariamente con agua y jabón.',
        logo: tapaboca
    },
    {
        title: 'Adopte medidas de higiene respiratoria',
        description: 'Al toser o estornudar, cúbrase la boca y la nariz con el codo flexionado o con un pañuelo; tire el pañuelo inmediatamente y lávese las manos con un desinfectante de manos a base de alcohol, o con agua y jabón.',
        logo: tos
    },
    {
        title: 'Mantenga el distanciamiento social',
        description: 'Mantenga al menos 1 metro de distancia entre usted y las demás personas, particularmente aquellas que tosan, estornuden y tengan fiebre.',
        logo: distancia
    }
]
