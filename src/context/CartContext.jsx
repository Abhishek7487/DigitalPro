import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const existingProduct = cart.some((p) => p.id === product.id);

    let updatedCart;

    if (existingProduct) {
      updatedCart = cart.map((cartProduct) => {
        return cartProduct.id === product.id
          ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
          : cartProduct;
      });
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    setCart(updatedCart);
  };
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
