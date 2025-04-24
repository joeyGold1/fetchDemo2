import fetch from 'node-fetch';

async function getArrivalsFromTfl(stopPointId) {
    const response = await fetch(`https://api.tfl.gov.uk/StopPoint/${stopPointId}/Arrivals`);
    const responseBody = await response.json();
    return responseBody;
}

const lineName = (await getArrivalsFromTfl('490008660N'))[0].lineName;
console.log(lineName);