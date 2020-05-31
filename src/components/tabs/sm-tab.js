import React from "react";
import {DATA} from "../../data/data";
import Charts from "../charts/charts";
import TestSection from "../test-section/TestSection";
import SmCasesCards from "../cards/SmCasesCards";

export default class SmTab extends React.Component {

    render() {
        return (
            <div>
                <div className={'last-update'}>
                    <h3>Última actualización: {new Date(DATA[0].date).toLocaleString()}</h3>
                </div>
                <div>
                    <SmCasesCards/>
                </div>
                <div>
                    <Charts/>
                </div>
                <div>
                    <TestSection/>
                </div>
                <div>
                    <p className={'source'}><strong>Fuente:</strong><a
                        href={'https://www.msm.gov.ar/prensa/informe-covid-san-miguel/'}> Municipalidad de San
                        Miguel</a></p>
                </div>
            </div>
        )
    }
}
