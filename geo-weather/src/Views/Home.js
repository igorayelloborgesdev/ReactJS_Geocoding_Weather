import React, { useState, useEffect } from "react";
import Title from "../Components/Title";
import InputText from "../Components/InputText";
import SearchButton from '../Components/SearchButton'
import { getGeolocation } from '../Functions/Geolocation'

const Home = (initialValues = {}) => {
  const [inputValue, setInputValue] = useState({
    streetName: "",
    houseNumber: "",
    cityName: "",
    stateName: "",
    zipCode: "",
  });
  const { streetName, houseNumber, cityName, stateName, zipCode } = inputValue;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <div>
      <Title title="Geo Weather" />
      <InputText
        labelName="Street name"
        type="text"
        value={streetName}
        placeholder="Street name"
        name="streetName"
        onChange={handleChange}
      />
      <InputText
        labelName="Street name"
        type="text"
        value={houseNumber}
        placeholder="House Number"
        name="houseNumber"
        onChange={handleChange}
      />
      <InputText
        labelName="City name"
        type="text"
        value={cityName}
        placeholder="City name"
        name="cityName"
        onChange={handleChange}
      />
      <InputText
        labelName="State name"
        type="text"
        value={stateName}
        placeholder="State name"
        name="stateName"
        onChange={handleChange}
      />
      <InputText
        labelName="Zip Code"
        type="text"
        value={zipCode}
        placeholder="State name"
        name="zipCode"
        onChange={handleChange}
      />                              
      <SearchButton name="Search" onClick={() => getGeolocation(inputValue)}/>
    </div>
  );
};

export default Home;
