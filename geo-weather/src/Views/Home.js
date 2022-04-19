import React, { useState, useEffect } from "react";
import Title from "../Components/Title";
import InputText from "../Components/InputText";
import SearchButton from "../Components/SearchButton";
import { geolocationFieldFormat } from "../Functions/Geolocation";
import { getGeolocationWeather } from "../Functions/GeoLocationWeather";
import { createWeatherObject } from "../Functions/Weather";
import ButtonDaysOfTheWeek from "../Components/ButtonDaysOfTheWeek";
import HighlightCard from "../Components/HighlightCard";

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
  const handleChangeResult = (resultRequest) => {   
    setResult(createWeatherObject(resultRequest));
  };
  const [cardIndex, setCardIndex] = useState(0);
  const handleChangeCardId = (cardId) => {
    setCardIndex(cardId);    
  };

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
      <Title title="Geo Weather" />
      <InputText
        labelName="Street name"
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
        labelName="City name"
        type="text"
        value={city}
        placeholder="City name"
        name="city"
        onChange={handleChange("alpha")}
      />
      <InputText
        labelName="State name"
        type="text"
        value={state}
        placeholder="State name"
        name="state"
        onChange={handleChange("state")}
      />
      <InputText
        labelName="Zip Code"
        type="text"
        value={zip}
        placeholder="State name"
        name="zip"
        onChange={handleChange("zip")}
      />
      <SearchButton
        name="Search"
        onClick={async () => {
          var resultRequest = await getGeolocationWeather(inputValue);
          handleChangeResult(resultRequest);
        }}
      />
      <div>{listPeriod}</div>
      <div>
        <HighlightCard
          detailedForecast={result[cardIndex].detailedForecast}
          namePeriod={result[cardIndex].namePeriod}
          shortForecast={result[cardIndex].shortForecast}
          temperature={result[cardIndex].temperature}
          temperatureCelsius={result[cardIndex].temperatureCelsius}
          windDirection={result[cardIndex].windDirection}
          windSpeed={result[cardIndex].windSpeed}
        />
      </div>
    </div>
  );
};

export default Home;
