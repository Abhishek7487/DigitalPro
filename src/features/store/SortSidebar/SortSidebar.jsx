import React from "react";
import Sort from "./Sort";
import Brands from "./Brands";
import Rating from "./Rating";
import PriceRange from "./PriceRange";
import { StyledSortSidebar } from "../../../styles/Styles.js";

function SortSidebar() {
  return (
    <>
      <StyledSortSidebar>
        <Sort />
        <Brands />
        <Rating />
        <PriceRange />
      </StyledSortSidebar>
    </>
  );
}

export default SortSidebar;
