import React from "react";
import { StyledPriceRange } from "../../../styles/Styles";

function PriceRange() {
  return (
    <StyledPriceRange>
      <span>Price Range</span>
      <input type="range" min="0" max="1000000" />
    </StyledPriceRange>
  );
}

export default PriceRange;
