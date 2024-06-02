import React from "react";
import { StyledRating } from "../../../styles/Styles.js";
import { ImStarEmpty } from "react-icons/im";

function Rating() {
  return (
    <StyledRating>
      <span>Ratings</span>
      <div>
        <button>
          1 <ImStarEmpty style={{ color: "red" }} />
        </button>
        <button>
          2 <ImStarEmpty style={{ color: "red" }} />
        </button>
        <button>
          3 <ImStarEmpty style={{ color: "red" }} />
        </button>
        <button>
          4 <ImStarEmpty style={{ color: "red" }} />
        </button>
        <button>
          5 <ImStarEmpty style={{ color: "red" }} />
        </button>
      </div>
    </StyledRating>
  );
}

export default Rating;
