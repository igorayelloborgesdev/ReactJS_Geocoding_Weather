import React from "react";
import Card from 'react-bootstrap/Card'

const ButtonDaysOfTheWeek = ({
  onClick,
  dayindex,
  temperature,
  namePeriod,
}) => (
  <div onClick={onClick} dayindex={dayindex} className={'daysOfTheWeekCard'}>
    <Card border="info">
      <Card.Body className={'daysOfTheWeekCard'}>
        <Card.Title className={'daysOfTheWeekCardTitle'}>{namePeriod}</Card.Title>
        <Card.Text>{temperature}°F</Card.Text>
      </Card.Body>
    </Card>
  </div>
);

export default ButtonDaysOfTheWeek;
