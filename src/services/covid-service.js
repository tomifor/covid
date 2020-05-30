// COVID-19 API
// URL: https://covid19api.com/
// Built by Kyle Redelinghuys

const BASE_URL = 'https://api.covid19api.com';


const getDataByCountry = async (country, startDate, finishDate) => {
    let response = await fetch(`${BASE_URL}/country/${country}?from=${startDate}&to=${finishDate}`);
    return await response.json();
}

export {getDataByCountry};
