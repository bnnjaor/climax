const API_KEY = 'f4d3d89545df4c5fbc4185049243105'
const BASE_URL = 'http://api.weatherapi.com/v1/current.json';

export const fetchWeather = async (city) => {
  const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${city}`);
  const data = await response.json();
  return data;
}
