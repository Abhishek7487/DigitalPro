import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import React, { useEffect, useState } from "react";

import { useSnackbar } from "../context/SnackbarContext";

export const AddCartButton = ({ product }) => {
  const { cart, addToCart } = useCartContext();
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const isInCart = cart.some((pro) => pro.id === product.id);

  const handleOnClick = (e) => {
    e.stopPropagation();
    if (isInCart) {
      navigate("/cart");
    } else {
      showSnackbar("product has been added to the cart!");
      addToCart(product);
    }
  };

  return (
    <button onClick={handleOnClick}>
      {isInCart ? "Go to Cart" : "Add to Cart"}
    </button>
  );
};
