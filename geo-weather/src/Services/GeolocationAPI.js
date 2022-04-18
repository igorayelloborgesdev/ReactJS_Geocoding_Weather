import axios from "axios";

const apiGeolocation = axios.create({
  baseURL: "https://geocoding.geo.census.gov/geocoder/locations"  
});

export default apiGeolocation;