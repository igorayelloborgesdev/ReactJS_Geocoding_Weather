import React from "react";
import Button from "react-bootstrap/Button";

const SearchButton = ({ onClick, name }) => (
  <div>
    {/* <button onClick={onClick}>{name}</button> */}
    <Button variant="primary" onClick={onClick}>{name}</Button>
  </div>
);
export default SearchButton;
