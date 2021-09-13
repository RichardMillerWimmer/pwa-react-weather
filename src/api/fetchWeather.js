import axios from 'axios';



const url = `https://api.openweathermap.org/data/2.5/weather`

export const fetchWeather = async (query) => {
    const { data } = await axios.get(url, {
        params: {
            q: query,
            appid: `${process.env.REACT_APP_API_KEY}`
        }
    });
    // console.log(data)
    return data;
};