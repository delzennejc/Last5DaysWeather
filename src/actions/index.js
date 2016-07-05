import axios from 'axios'

// DEFINES
const API_KEY = "9fa5fac297ec60bc6aced71efcd5e124";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

// ACTION NAMES
export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
    const url = `${ROOT_URL}&q=${city},fr`;
    const request = axios.get(url);
    return {
      type: FETCH_WEATHER,
      payload: request
    };
}
