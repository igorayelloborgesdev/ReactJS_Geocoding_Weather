import React from "react";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

const SpinnerGroup = () => (
    <Row>
    <div className={'spinner'}>
      <Spinner animation="grow" variant="light" />              
      <Spinner animation="grow" variant="light" size="sm" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="light" size="sm" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="light" size="sm" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="light" size="sm" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="light" size="sm" />
      <Spinner animation="grow" variant="light" />        
    </div>
  </Row>
);

export default SpinnerGroup;
