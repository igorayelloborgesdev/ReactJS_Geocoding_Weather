import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const HighlightCard = ({
  detailedForecast,
  namePeriod,
  shortForecast,
  temperature,
  temperatureCelsius,
  windDirection,
  windSpeed,
  city
}) => (
  <div>
    <Card border="info" className={"mainCard"}>
      <div className={"mainCardChild"}>
        <div className={"mainCardColLeft"}>
          <div className={"mainCardColLeftTitle"}>{namePeriod}</div>
          <div>{temperature}°F</div>
          <div>{temperatureCelsius}°C</div>
        </div>
        <div className={"mainCardColRight"}> 
          <div>
            <div className={"mainCardColRightMargin"}><b>{city}</b></div>
            <div className={"mainCardColRightMargin"}><b>Short forecast:</b> {shortForecast}</div>
            <div className={"mainCardColRightMargin"}><b>Wind direction:</b> {windDirection}</div>
            <div className={"mainCardColRightMargin"}><b>Wind speed:</b> {windSpeed}</div>
            <div className={"mainCardColRightMargin"}><b>Detail:</b> {detailedForecast}</div>
          </div>                    
        </div>
      </div>
    </Card>
  </div>
);

export default HighlightCard;
