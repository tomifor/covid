// COVID-19 API
// URL: https://covid19api.com/
// Built by Kyle Redelinghuys

import {DATA} from "../data/data";

const BASE_URL = 'https://api.covid19api.com';


const getDataByCountry = async (country, startDate, finishDate) => {
    const URL = `${BASE_URL}/country/${country}?from=${startDate}&to=${finishDate}`;
    let response = await fetch(URL);
    return await response.json();
}

export {getDataByCountry};


export const getSmCasesData = () => {
    const last = DATA[0];
    const yesterday = DATA[1];
    const active = last.cases.total - last.cases.cured - last.cases.dead;
    const yesterdayActive = active - (yesterday.cases.total - yesterday.cases.cured - yesterday.cases.dead);
    const hospitalized = last.cases.insideHospitalized + last.cases.outsideHospitalized;

    return {
        total: last.cases.total.toString(),
        newCases: last.cases.newCases.toString(),
        active: active.toString(),
        differenceActive: yesterdayActive.toString(),
        duplication: calculateDuplication(DATA),
        hospitalized: hospitalized.toString(),
        differenceHospitalized: (hospitalized - (yesterday.cases.insideHospitalized + yesterday.cases.outsideHospitalized)).toString(),
        cured: last.cases.cured.toString(),
        differenceCured: (last.cases.cured - yesterday.cases.cured).toString(),
        study: last.inStudy.toString(),
        dismiss: last.dismiss.toString(),
        differenceDismiss: (last.dismiss - yesterday.dismiss).toString(),
        dead: last.cases.dead.toString(),
        differenceDead: (last.cases.dead - yesterday.cases.dead).toString(),
        deadRate: ((last.cases.dead / last.cases.total) * 100).toFixed(1).replace('.', ','),
    }
}


const calculateDuplication = (data) => {
    let result;
    const accumulated = data.map(elem => elem.cases.total);
    const total = accumulated[0];
    const divided = accumulated.map(elem => 2 - total / elem);
    divided.forEach((elem, index) => {
        if (elem > 0 && divided[index + 1] < 0) {
            result = (elem < Math.abs(divided[index + 1]) ? index : index + 1) + 1;
        }
    });
    return result;
}
