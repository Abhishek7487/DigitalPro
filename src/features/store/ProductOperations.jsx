import { AddCartButton } from "../../services/AddCartButton";
import { StyledProductOperations } from "../../styles/Styles";

function ProductOperations(props) {
  return (
    <StyledProductOperations>
      <AddCartButton product={props.product} />
      <button>Buy Now</button>
    </StyledProductOperations>
  );
}

export default ProductOperations;
