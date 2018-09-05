import { ROOT_URL } from '../lib/constants'
import axios from 'axios'

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city},nl`;
  const request = axios.get(url);


  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

