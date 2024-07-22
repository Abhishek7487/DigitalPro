import { Link } from "react-router-dom";
import { StyledProductOperations } from "../../styles/Styles";
import { useCartContext } from "../../context/CartContext";

function ProductOperations(props) {
  const { cart, addToCart } = useCartContext();
  return (
    <StyledProductOperations>
      <button onClick={() => addToCart(props.product)}>Add to Cart</button>
      <button>Buy Now</button>
    </StyledProductOperations>
  );
}

export default ProductOperations;
