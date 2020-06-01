// COVID-19 API
// URL: https://covid19api.com/
// Built by Kyle Redelinghuys

const BASE_URL = 'https://api.covid19api.com';


const getDataByCountry = async (country, startDate, finishDate) => {
    const URL = `${BASE_URL}/country/${country}?from=${startDate}&to=${finishDate}`;
    console.log(URL);
    let response = await fetch(URL);
    return await response.json();
}

export {getDataByCountry};
