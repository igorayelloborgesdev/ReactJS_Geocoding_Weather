import {
    getGeolocation
  } from "../Functions/Geolocation";
  
  import {
    getWeather
  } from "../Functions/Weather";


export async function getGeolocationWeather(obj) {
    var resultGeo = await getGeolocation(obj);        
    if(resultGeo.success)
    {      
        var resultWeather = await getWeather(resultGeo);                        
        return resultWeather;
    }        
}