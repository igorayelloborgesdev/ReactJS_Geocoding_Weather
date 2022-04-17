import React, { useState, useEffect } from 'react';
import Title from '../Components/Title'
import InputText from '../Components/InputText'
// import SearchButton from '../Components/SearchButton'

const Home = (initialValues = {}) =>{

    const [inputValue, setInputValue] = useState({ streetName: "", houseNumber:"" });
    const { streetName, houseNumber } = inputValue;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue((prev) => ({
          ...prev,
          [name]: value,
        })
        );        
      };  
      useEffect(() => {
        console.log(inputValue);
      }, [inputValue]);

  return (
    <div>        
      <Title title="Geo Weather"/>              
      <InputText labelName="Street name" 
      type="text"
      value={streetName}
      placeholder="Street name"      
      name="streetName"
      onChange={handleChange}
      />  
      <InputText labelName="Street name" 
      type="text"
      value={houseNumber}
      placeholder="House Number"      
      name="houseNumber"
      onChange={handleChange}
      />  
  
      {/* 
      <InputText value={state.lastName} labelName="Number" onChange={handleChange}/>  
      <InputText labelName="City name"/>  
      <InputText labelName="State"/>  
      <InputText labelName="Zip"/>  
      <SearchButton name="Search"/> */}
    </div>
  );
}

export default Home;
