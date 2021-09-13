import axios from 'axios';

import dotenv from 'dotenv';
dotenv.config();
const { API_KEY } = process.env

const url = `https://api.openweathermap.org/data/2.5/weather`

export const fetchWeather = async (query) => {
    const { data } = await axios.get(url, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    });
    return data;
};