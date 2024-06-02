import React from "react";
import { StyledSort } from "../../../styles/Styles";

function Sort() {
  return (
    <StyledSort>
      <span>Sort</span>
      <label>
        <input type="radio" name="test" />
        Price(high to low)
      </label>
      <label>
        <input type="radio" name="test" />
        Price(low to high)
      </label>
    </StyledSort>
  );
}

export default Sort;
