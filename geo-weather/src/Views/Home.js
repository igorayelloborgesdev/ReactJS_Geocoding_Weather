import React, { useState, useEffect } from "react";
import Title from "../Components/Title";
import InputText from "../Components/InputText";
import SearchButton from "../Components/SearchButton";
import { geolocationFieldFormat } from "../Functions/Geolocation";

import { getGeolocationWeather } from "../Functions/GeoLocationWeather";

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
    let newArray = [];
    let newPeriod = {};
    for (let i = 0; i < resultRequest.periods.length; i++) {
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
    setResult(newArray);
  };

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

      <h1>{result[0].namePeriod}</h1>


    </div>
  );
};

export default Home;
