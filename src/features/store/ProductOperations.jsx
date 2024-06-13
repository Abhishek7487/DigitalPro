import { Link } from "react-router-dom";
import { StyledProductOperations } from "../../styles/Styles";

function ProductOperations() {
  return (
    <StyledProductOperations>
      <button>Add to Cart</button>
      <button>Buy Now</button>
    </StyledProductOperations>
  );
}

export default ProductOperations;
