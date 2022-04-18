import axios from "axios";

const apiWeather = axios.create({
  baseURL: "https://api.weather.gov/gridpoints/TOP"  
});

export default apiWeather;