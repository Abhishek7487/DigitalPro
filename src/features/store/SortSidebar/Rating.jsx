import React from "react";
import { StyledRating } from "../../../styles/Styles.js";
import { ImStarEmpty } from "react-icons/im";
import { useSearchParams } from "react-router-dom";

function Rating() {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleClick(value) {
    searchParams.set("rating", value);

    setSearchParams(searchParams);
  }
  return (
    <StyledRating>
      <span>Ratings</span>
      <div>
        {arr.map((val) => {
          return (
            <button onClick={() => handleClick(val)} key={val}>
              {val} <ImStarEmpty style={{ color: "red" }} />
            </button>
          );
        })}
      </div>
    </StyledRating>
  );
}

export default Rating;
