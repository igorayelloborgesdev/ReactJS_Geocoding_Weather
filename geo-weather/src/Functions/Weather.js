import { getWeatherService } from "../Services/WeatherService";

export async function getWeather(obj) {    
    var coord = FormatCoordinates(obj.coordinates.x, obj.coordinates.y);
    return await getWeatherService(coord);
}
function FormatCoordinates(x, y)
{
    var newX = parseInt(Math.abs(x));
    var newY = parseInt(Math.abs(y));
    return newY.toString() + "," + newX.toString();
}
export function createWeatherObject(resultRequest) {    
    let newArray = [];
    let newPeriod = {};
    for (let i = 0; i < resultRequest.periods.length - 1; i++) {
      newPeriod = {
        detailedForecast: resultRequest.periods[i].detailedForecast,
        namePeriod: resultRequest.periods[i].name,
        shortForecast: resultRequest.periods[i].shortForecast,
        temperature: resultRequest.periods[i].temperature,
        temperatureCelsius: resultRequest.periods[i].temperatureCelsius,
        windDirection: resultRequest.periods[i].windDirection,
        windSpeed: resultRequest.periods[i].windSpeed,
      };
      newArray.push(newPeriod);
    }
    return newArray;
}