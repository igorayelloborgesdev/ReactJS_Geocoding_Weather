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


