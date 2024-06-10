import React from "react";
import { StyledBrands } from "../../../styles/Styles.js";
import { useSearchParams } from "react-router-dom";

function Brands() {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleClick(value) {
    searchParams.set("brand", value);
    setSearchParams(searchParams);
  }

  return (
    <StyledBrands>
      <span>Brands</span>
      <label>
        <input type="radio" name="radio" onChange={() => handleClick("all")} />
        All
      </label>
      <label>
        <input
          type="radio"
          name="radio"
          onChange={() => handleClick("xiaomi")}
        />
        Xiaomi
      </label>
      <label>
        <input
          type="radio"
          name="radio"
          onChange={() => handleClick("samsung")}
        />
        Samsung
      </label>
      <label>
        <input
          type="radio"
          name="radio"
          onChange={() => handleClick("oneplus")}
        />
        OnePlus
      </label>
      <label>
        <input
          type="radio"
          name="radio"
          onChange={() => handleClick("apple")}
        />
        Apple
      </label>
      <label>
        <input
          type="radio"
          name="radio"
          onChange={() => handleClick("realme")}
        />
        Realme
      </label>
    </StyledBrands>
  );
}

export default Brands;
