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
        return CreateReturnObject(resultGeo.matchedAddress, resultWeather.periods, true, "");
    }
    else
    {
      return CreateReturnObject("", [], false, resultGeo.message);
    }
}

function CreateReturnObject(aMatchedAddress, aPeriods, aSuccess, aMessage)
{
  let obj = {
    matchedAddress: aMatchedAddress,
    periods: aPeriods,
    success: aSuccess,
    message: aMessage
  }
  return obj;
}