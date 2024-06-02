import React from "react";
import { StyledBrands } from "../../../styles/Styles.js";

function Brands() {
  return (
    <StyledBrands>
      <span>Brands</span>
      <label>
        <input type="checkbox" name="checkbox" />
        Xiaomi
      </label>
      <label>
        <input type="checkbox" name="checkbox" />
        Samsung
      </label>
      <label>
        <input type="checkbox" name="checkbox" />
        OnePlus
      </label>
      <label>
        <input type="checkbox" name="checkbox" />
        Apple
      </label>
      <label>
        <input type="checkbox" name="checkbox" />
        Realme
      </label>
    </StyledBrands>
  );
}

export default Brands;
