import React from "react";
import { StyledProductCard } from "../../styles/Styles";
import Star from "../../services/Star";
import { formatter } from "../../utils/useCurrencyFormatter";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/store/${product.id}`}>
      <StyledProductCard>
        <div className="productCardImage">
          <img src={product.productImages[0]} alt={product.name} />
        </div>

        <div className="productCardInfo">
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
    </Link>
  );
}
