import React from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../src/Views/Home";

function App() {
  return (
    <BrowserRouter>         
       <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>                           
    </BrowserRouter>
  );
}

export default App;
