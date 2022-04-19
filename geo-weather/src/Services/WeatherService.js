import apiWeather from "../Services/WeatherAPI";
import {convertFahrenheitToCelcius} from "../Util/Convert";

export async function getWeatherService(queryString) {
  try {
    const res = await apiWeather
      .get( queryString + "/forecast")      
      .then((response) => {          
          var obj = {            

            // periods: response.data.properties.periods.map(element=>({              
            //     'detailedForecast': element.detailedForecast,
            //     'name': element.name,
            //     'shortForecast': element.shortForecast,
            //     'temperature': element.temperature,
            //     'temperatureCelsius': convertFahrenheitToCelcius(element.temperature),
            //     'windDirection': element.windDirection,
            //     'windSpeed': element.windSpeed                              
            // }))

            periods: response.data.properties.periods.filter(element => !element.name.includes("Night")).map(element=>({              
              'detailedForecast': element.detailedForecast,
              'name': element.name,
              'shortForecast': element.shortForecast,
              'temperature': element.temperature,
              'temperatureCelsius': convertFahrenheitToCelcius(element.temperature),
              'windDirection': element.windDirection,
              'windSpeed': element.windSpeed                              
          }))

          };
          return obj; 
      })
      .catch((err) => {
        console.error("Error: " + err);
      });
      return res;      
  } catch (e) {
    console.error("Search not found");
  }
}
