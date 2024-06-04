import React from "react";
import { StyledRating } from "../../../styles/Styles.js";
import { ImStarEmpty } from "react-icons/im";

function Rating() {
  const arr = [1, 2, 3, 4, 5];
  return (
    <StyledRating>
      <span>Ratings</span>
      <div>
        {arr.map((val) => {
          return (
            <button key={val}>
              {val} <ImStarEmpty style={{ color: "red" }} />
            </button>
          );
        })}
      </div>
    </StyledRating>
  );
}

export default Rating;
