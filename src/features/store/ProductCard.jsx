import React from "react";
import { StyledProductCard } from "../../styles/Styles";
import { ImStarEmpty } from "react-icons/im";
import { ImStarHalf } from "react-icons/im";
import { ImStarFull } from "react-icons/im";
import { formatter } from "../../utils/useCurrencyFormatter";

export const Star = ({ type }) => {
  if (type === "FULL") {
    return <ImStarFull style={{ color: "red" }} />;
  } else if (type === "HALF") {
    return <ImStarHalf style={{ color: "red" }} />;
  }

  return <ImStarEmpty style={{ color: "red" }} />;
};

export default function ProductCard({ product }) {
  const maxStars = 5; // Max stars to be displayed
  const filledStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 !== 0;
  const emptyStars = maxStars - filledStars - (hasHalfStar ? 1 : 0);

  const stars = [
    ...Array(filledStars).fill("FULL"),
    ...(hasHalfStar ? ["HALF"] : []),
    ...Array(emptyStars).fill("EMPTY"),
  ];

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
            {stars.map((type, index) => (
              <Star key={index} type={type} />
            ))}
          </span>
          <p>{formatter.format(product.price)}</p>
        </main>
        <button>Add to Cart</button>
      </div>
    </StyledProductCard>
  );
}
