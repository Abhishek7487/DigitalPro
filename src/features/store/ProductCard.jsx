import React from "react";
import { StyledProductCard } from "../../styles/Styles";
import { ImStarEmpty } from "react-icons/im";

export default function ProductCard({ product }) {
  console.log(product);
  return (
    <StyledProductCard>
      <div className="productImage">
        <img src={product.productImages[0]} />
      </div>

      <div className="productInfo">
        <p>{product.name}</p>
        <main>
          <p>₹{product.price}</p>
          <span>
            <ImStarEmpty style={{ color: "red" }} />
            {product.rating}
          </span>
        </main>
        <button>Add to Cart</button>
      </div>
    </StyledProductCard>
  );
}
