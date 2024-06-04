import React from "react";
import { StyledPriceRange } from "../../../styles/Styles";
import { useSearchParams } from "react-router-dom";

function PriceRange() {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleClick(e) {
    const value = e.target.value;
    searchParams.set("range", value);
    setSearchParams(searchParams);
  }
  return (
    <StyledPriceRange>
      <span>Price Range</span>
      <input type="range" min="0" max="1000000" onChange={handleClick} />
    </StyledPriceRange>
  );
}

export default PriceRange;
