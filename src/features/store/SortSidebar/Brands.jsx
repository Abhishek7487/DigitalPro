import React, { useState } from "react";
import { StyledBrands } from "../../../styles/Styles.js";
import { useSearchParams } from "react-router-dom";

function Brands() {
  const [searchParams, setSearchParams] = useSearchParams();
  const arr = [
    "All",
    "Xiaomi",
    "Samsung",
    "OnePlus",
    "Apple",
    "Realme",
    "Redmi",
    "Garmin",
    "Dell",
    "HP",
    "Sony",
    "Soundcore",
    "boAt",
    "Zebronics",
    "JBL",
  ];

  function handleClick(value) {
    searchParams.set("brand", value.toLowerCase());
    setSearchParams(searchParams);
  }

  return (
    <StyledBrands>
      <span>Brands</span>
      {arr.map((val) => (
        <label key={val}>
          <input
            type="radio"
            name="radio"
            value={val.toLowerCase()}
            onChange={(e) => handleClick(e.target.value)}
          />
          {val}
        </label>
      ))}
    </StyledBrands>
  );
}

export default Brands;
