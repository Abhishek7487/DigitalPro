import React, { useEffect, useState } from "react";
import Star from "../../services/Star";
import { formatter } from "../../utils/useCurrencyFormatter";
import { useNavigate } from "react-router-dom";
import { AddCartButton } from "../../services/AddCartButton";
import { StyledProductCard } from "../../styles/Styles";
import { useCartContext } from "../../context/CartContext";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { cart, addToCart } = useCartContext();

  const goToProductPage = () => {
    navigate(`/store/${product.id}`);
  };

  return (
    <StyledProductCard onClick={goToProductPage}>
      <div className="productCardImage">
        <img src={product.productImages[0]} alt={product.name} />
      </div>

      <div className="productCardInfo">
        <p>{product.name}</p>
        <main>
          <span>
            {product.rating}
            <Star rating={product.rating} />
            {/* <Heart product={product.id} /> */}
          </span>
          <p>{formatter.format(product.price)}</p>
        </main>
        <AddCartButton product={product} />
      </div>
    </StyledProductCard>
  );
}
