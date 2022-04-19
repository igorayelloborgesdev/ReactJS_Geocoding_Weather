import React from 'react';

const ButtonDaysOfTheWeek = ({ onClick, dayindex, temperature, namePeriod }) => (    
      <div onClick={onClick} dayindex={dayindex}>
        <h2>{namePeriod}</h2>        
        <div>{temperature}</div>
      </div>            
);

export default ButtonDaysOfTheWeek;