import React, { useState, useEffect } from "react";
import Title from "../Components/Title";
import InputText from "../Components/InputText";
import SearchButton from "../Components/SearchButton";
import { geolocationFieldFormat } from "../Functions/Geolocation";
import { getGeolocationWeather } from "../Functions/GeoLocationWeather";
import { createWeatherObject } from "../Functions/Weather";
import ButtonDaysOfTheWeek from "../Components/ButtonDaysOfTheWeek";
import HighlightCard from "../Components/HighlightCard";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "../Styles/Style.css";
import Spinner from "react-bootstrap/Spinner";
import SpinnerGroup from "../Components/SpinnerGroup";

const Home = (initialValues = {}) => {
  const [inputValue, setInputValue] = useState({
    street: "",
    houseNumber: "",
    city: "",
    state: "",
    zip: "",
  });
  const { street, houseNumber, city, state, zip } = inputValue;
  const handleChange = (tag) => (e) => {
    const { name, value } = e.target;
    let valueFormated = geolocationFieldFormat(value, tag);
    setInputValue((prev) => ({
      ...prev,
      [name]: valueFormated,
    }));
  };
  useEffect(() => {}, [inputValue]);
  const [result, setResult] = useState([
    {
      detailedForecast: "",
      namePeriod: "",
      shortForecast: "",
      temperature: "",
      temperatureCelsius: "",
      windDirection: "",
      windSpeed: "",
    },
  ]);
  const [cityRequest, setCity] = useState("");
  const handleChangeResult = (resultRequest) => {
    setResult(createWeatherObject(resultRequest));
    setCity(resultRequest.matchedAddress);
    setShowResults(true);
    setShowSpinner(false);
  };
  const [cardIndex, setCardIndex] = useState(0);
  const handleChangeCardId = (cardId) => {
    setCardIndex(cardId);
  };
  const [showResults, setShowResults] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const listPeriod = result.map((period, index) => (
    <ButtonDaysOfTheWeek
      onClick={() => handleChangeCardId(index)}
      key={index}
      dayindex={index}
      temperature={period.temperature}
      namePeriod={period.namePeriod}
    />
  ));

  return (
    <div>
      <Container className={"div-content"}>
        <Row>
          <Col>
            <Title title="Geo Weather" />
          </Col>
        </Row>

        {showSpinner ? (
          <SpinnerGroup/>
        ) : (
          <Row>
            <Col lg={3} md={12}>
              <InputText
                labelName="Street"
                type="text"
                value={street}
                placeholder="Street name"
                name="street"
                onChange={handleChange("alpha")}
              />
              <InputText
                labelName="Number"
                type="text"
                value={houseNumber}
                placeholder="Number"
                name="houseNumber"
                onChange={handleChange("num")}
              />
              <InputText
                labelName="City"
                type="text"
                value={city}
                placeholder="City name"
                name="city"
                onChange={handleChange("alpha")}
              />
              <InputText
                labelName="State"
                type="text"
                value={state}
                placeholder="State code"
                name="state"
                onChange={handleChange("state")}
              />
              <InputText
                labelName="Zip"
                type="text"
                value={zip}
                placeholder="Zip Code"
                name="zip"
                onChange={handleChange("zip")}
              />
              <SearchButton
                name="Search"
                onClick={async () => {
                  setShowSpinner(true);
                  var resultRequest = await getGeolocationWeather(inputValue);
                  handleChangeResult(resultRequest);
                }}
              />
            </Col>
            <Col lg={9} md={12}>
              {showResults ? (
                <div>
                  <HighlightCard
                    detailedForecast={result[cardIndex].detailedForecast}
                    namePeriod={result[cardIndex].namePeriod}
                    shortForecast={result[cardIndex].shortForecast}
                    temperature={result[cardIndex].temperature}
                    temperatureCelsius={result[cardIndex].temperatureCelsius}
                    windDirection={result[cardIndex].windDirection}
                    windSpeed={result[cardIndex].windSpeed}
                    city={cityRequest}
                  />
                  <div>{listPeriod}</div>
                </div>
              ) : null}
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Home;
