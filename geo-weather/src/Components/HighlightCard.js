import React from 'react';
import Card from 'react-bootstrap/Card'

const HighlightCard = ({ detailedForecast, namePeriod, shortForecast, temperature, temperatureCelsius, windDirection, windSpeed  }) => (    
    <div>      
      <Card border="info">
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          {temperature}°F
          {detailedForecast}
    {namePeriod}
    {shortForecast}
    {temperatureCelsius}
    {windDirection}
    {windSpeed}
        </Card.Text>
      </Card.Body>
    </Card>      
  </div>
);

export default HighlightCard;