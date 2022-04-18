import React, { useState, useEffect } from "react";
import Title from "../Components/Title";
import InputText from "../Components/InputText";
import SearchButton from "../Components/SearchButton";
import {  
  geolocationFieldFormat,
} from "../Functions/Geolocation";

import {
    getGeolocationWeather,
  } from "../Functions/GeoLocationWeather";

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
  
  const [count, setCount] = useState("");


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
      <SearchButton name="Search" onClick={async () => {
          var result = await getGeolocationWeather(inputValue);                    
          console.log(result.periods[0].detailedForecast);
          setCount(result.periods[0].detailedForecast)
          } } />


          <h1>{count}</h1>


    </div>
  );
};

export default Home;
