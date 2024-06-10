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
        <p
          onClick={() => {
            handleClick("1");
          }}
        >
          1<ImStarEmpty style={{ color: "red" }} />
        </p>
        <p
          onClick={() => {
            handleClick("2");
          }}
        >
          2<ImStarEmpty style={{ color: "red" }} />
        </p>
        <p
          onClick={() => {
            handleClick("3");
          }}
        >
          3<ImStarEmpty style={{ color: "red" }} />
        </p>
        <p
          onClick={() => {
            handleClick("4");
          }}
        >
          4<ImStarEmpty style={{ color: "red" }} />
        </p>
        <p
          onClick={() => {
            handleClick("5");
          }}
        >
          5<ImStarEmpty style={{ color: "red" }} />
        </p>
      </div>
    </StyledRating>
  );
}

export default Rating;
