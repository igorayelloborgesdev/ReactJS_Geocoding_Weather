import React from "react";
import Button from "react-bootstrap/Button";

const SearchButton = ({ onClick, name }) => (
  <div>    
    <Button className={'buttonSearch'} variant="primary" onClick={onClick}>{name}</Button>
  </div>
);
export default SearchButton;
