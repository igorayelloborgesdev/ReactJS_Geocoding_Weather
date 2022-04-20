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
        return CreateReturnObject(resultGeo.matchedAddress, resultWeather.periods);
    }        
}

function CreateReturnObject(aMatchedAddress, aPeriods)
{
  let obj = {
    matchedAddress: aMatchedAddress,
    periods: aPeriods,
    success: true,
    message: ""    
  }
  return obj;
}