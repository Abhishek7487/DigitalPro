import { useNavigate } from "react-router-dom";
import { AddCartButton } from "../../services/AddCartButton";
import { StyledProductOperations } from "../../styles/Styles";

function ProductOperations(props) {
  const navigate = useNavigate();
  return (
    <StyledProductOperations>
      <AddCartButton product={props.product} />
      <button onClick={() => navigate("/checkout")}>Buy Now</button>
    </StyledProductOperations>
  );
}

export default ProductOperations;
