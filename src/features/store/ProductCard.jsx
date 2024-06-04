import React from "react";
import { StyledProductCard } from "../../styles/Styles";
import Star from "../../services/Star";
import { formatter } from "../../utils/useCurrencyFormatter";

export default function ProductCard({ product }) {
  return (
    <StyledProductCard>
      <div className="productImage">
        <img src={product.productImages[0]} alt={product.name} />
      </div>

      <div className="productInfo">
        <p>{product.name}</p>
        <main>
          <span>
            {product.rating}
            <Star rating={product.rating} />
          </span>
          <p>{formatter.format(product.price)}</p>
        </main>
        <button>Add to Cart</button>
      </div>
    </StyledProductCard>
  );
}
