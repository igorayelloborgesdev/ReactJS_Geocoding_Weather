import React, { useState, useEffect } from "react";
import Title from "../Components/Title";
import InputText from "../Components/InputText";
import SearchButton from '../Components/SearchButton'
import { getGeolocation, geolocationFieldFormat } from '../Functions/Geolocation'

const Home = (initialValues = {}) => {
  const [inputValue, setInputValue] = useState({
    streetName: "",
    houseNumber: "",
    cityName: "",
    stateName: "",
    zipCode: "",
  });
  const { streetName, houseNumber, cityName, stateName, zipCode } = inputValue;
  const handleChange = (tag) => (e) => {
    const { name, value } = e.target;
    let valueFormated = geolocationFieldFormat(value, tag);
    setInputValue((prev) => ({
      ...prev,
      [name]: valueFormated,
    }));    
  };  

  useEffect(() => {    
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
        onChange={handleChange("alpha")}
      />
      <InputText
        labelName="House number"
        type="text"
        value={houseNumber}
        placeholder="House Number"
        name="houseNumber"        
        onChange={handleChange("num")}
      />
      <InputText
        labelName="City name"
        type="text"
        value={cityName}
        placeholder="City name"
        name="cityName"        
        onChange={handleChange("alpha")}
      />
      <InputText
        labelName="State name"
        type="text"
        value={stateName}
        placeholder="State name"
        name="stateName"        
        onChange={handleChange("state")}
      />
      <InputText
        labelName="Zip Code"
        type="text"
        value={zipCode}
        placeholder="State name"
        name="zipCode"        
        onChange={handleChange("zip")}
      />                              
      <SearchButton name="Search" onClick={() => getGeolocation(inputValue)}/>
    </div>
  );
};

export default Home;
