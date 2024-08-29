import React, { useContext, useEffect, useState } from "react";
import Star from "../../components/Star";
import { formatter } from "../../utils/useCurrencyFormatter";
import { useNavigate } from "react-router-dom";
import { AddCartButton } from "../../components/AddCartButton";
import { StyledProductCard } from "../../styles/Styles";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useWishlist } from "../../context/WishlistContext";
import { useAuth } from "../../context/UserConetxt";
import { useSnackbar } from "../../context/SnackbarContext";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { checkInWishlist, wishlist, addToWishlist, removeFromWishlist } =
    useWishlist();
  const inWishlist = checkInWishlist(product);
  const { isAuthenticated } = useAuth();
  const { showSnackbar } = useSnackbar();

  const goToProductPage = () => {
    navigate(`/store/${product.id}`);
  };

  console.log(wishlist);

  return (
    <StyledProductCard>
      <div className="productCardImage" onClick={goToProductPage}>
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
          {inWishlist ? (
            <BsSuitHeartFill
              onClick={() => removeFromWishlist(product)}
              className="heart"
            />
          ) : (
            <BsSuitHeart
              onClick={() => {
                if (isAuthenticated) {
                  addToWishlist(product);
                } else {
                  showSnackbar("Sign in to add product in the wishlist");
                }
              }}
              className="heart"
            />
          )}
        </main>
        <AddCartButton product={product} />
      </div>
    </StyledProductCard>
  );
}
