import React from "react";
import Star from "../../components/Star";
import { formatter } from "../../utils/useCurrencyFormatter";
import { useNavigate } from "react-router-dom";
import { AddCartButton } from "../../components/AddCartButton";
import { StyledProductCard } from "../../styles/Styles";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

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
