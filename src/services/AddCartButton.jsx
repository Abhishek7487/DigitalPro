import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export const AddCartButton = ({ product }) => {
  const { cart, addToCart } = useCartContext();
  const navigate = useNavigate();
  const isInCart = cart.some((pro) => pro.id === product.id);

  const handleOnClick = (e) => {
    e.stopPropagation();
    if (isInCart) {
      navigate("/cart");
    } else {
      addToCart(product);
    }
  };

  return (
    <button onClick={handleOnClick}>
      {isInCart ? "Go to Cart" : "Add to Cart"}
    </button>
  );
};
