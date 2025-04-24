import fetch from 'node-fetch';
import { config } from 'dotenv';

config();

const api_key = process.env.API_KEY;

async function getArrivalsFromTfl(stopPointId) {
    const response = await fetch(`https://api.tfl.gov.uk/StopPoint/${stopPointId}/Arrivals?api_key=${api_key}`);
    const responseBody = await response.json();
    return responseBody;
}

const lineName = (await getArrivalsFromTfl('490008660N'))[0].lineName;
console.log(lineName);