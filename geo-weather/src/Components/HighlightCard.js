import React from 'react';

const HighlightCard = ({ detailedForecast, namePeriod, shortForecast, temperature, temperatureCelsius, windDirection, windSpeed  }) => (    
    <div>        
    {detailedForecast}
    {namePeriod}
    {shortForecast}
    {temperature}
    {temperatureCelsius}
    {windDirection}
    {windSpeed}
  </div>
);

export default HighlightCard;