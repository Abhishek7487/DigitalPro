import React from "react";
import { StyledCart } from "../styles/Styles";
import { useCartContext } from "../context/CartContext";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { formatter } from "../utils/useCurrencyFormatter";

function Cart() {
  const {
    cart,
    setCart,
    removeFromCart,
    increaseProductQuantity,
    decreaseProductQuantity,
    cartTotal,
  } = useCartContext();
  return (
    <StyledCart>
      {cart.map((product) => (
        <div className="cartProductCard" key={product.id}>
          <img src={product.productImages[0]} />
          <h2>{product.name}</h2>
          <p>{formatter.format(product.price)}</p>
          <div className="quantityButton">
            <button onClick={() => decreaseProductQuantity(product.id)}>
              <FiMinus />
            </button>
            <button>{product.quantity}</button>
            <button onClick={() => increaseProductQuantity(product.id)}>
              <GoPlus />
            </button>
          </div>
          <button
            className="crossCartButton"
            onClick={() => removeFromCart(product.id)}
          >
            <RxCross2 />
          </button>
        </div>
      ))}
    </StyledCart>
  );
}

export default Cart;
