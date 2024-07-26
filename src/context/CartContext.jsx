import { createContext, useContext, useEffect, useRef, useState } from "react";
import { updateQuantity } from "./CartContext.helpers";

export const CartContext = createContext(null);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const isFirstTimeLoading = useRef(true);

  useEffect(() => {
    if (isFirstTimeLoading.current) return;
    localStorage.setItem("productCart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (isFirstTimeLoading.current) {
      const cartFromLocal = localStorage.getItem("productCart");
      if (Boolean(cartFromLocal)) {
        const value = JSON.parse(cartFromLocal);
        console.log(value);
        setCart(value);
      } else {
        setCart([]);
      }
    }
    isFirstTimeLoading.current = false;
  }, []);

  const addToCart = (product) => {
    const existingProduct = cart.some((p) => p.id === product.id);

    let updatedCart;

    if (existingProduct) {
      updatedCart = updateQuantity(cart, product.id);
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };
  const increaseProductQuantity = (productId) => {
    const updatedCart = updateQuantity(cart, productId);
    setCart(updatedCart);
  };
  const decreaseProductQuantity = (productId) => {
    const updatedCart = updateQuantity(cart, productId, -1);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        increaseProductQuantity,
        decreaseProductQuantity,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
