import React from "react";
import { StyledProductCard } from "../../styles/Styles";
import useProducts from "../../services/useProducts";
import { ImStarEmpty } from "react-icons/im";
//import { useProducts } from "../services/useProducts.js";

export default function ProductCard() {
  const products = useProducts();
  const product = {
    id: 1,
    name: "Samsung Galaxy S21 Ultra 5G",
    brand: "samsung",
    price: 105999,
    rating: 4.5,
    category: "mobiles",
    colors: ["Black", "Grey"],
    highlights: [
      "Quad rear camera with 108 MP main sensor",
      "6.8-inch Dynamic AMOLED 2X display with 120 Hz refresh rate",
      "Exynos 2100 processor with 12 GB RAM",
      "5000 mAh battery with fast wireless charging and reverse wireless charging",
      "Android 11 with One UI 3.1 and 5G support",
    ],
    images: {
      slider: [
        "https://dev-shopp.vercel.app/_next/image?url=https%3A%2F%2Frukminim2.flixcart.com%2Fimage%2F416%2F416%2Fkjvrdzk0%2Fmobile%2Ft%2Fx%2F3%2Fsamsung-galaxy-s21-ultra-sm-g998bzkginu-original-imafzcm2vacyygnb.jpeg%3Fq%3D70&w=640&q=75",
        "https://dev-shopp.vercel.app/_next/image?url=https%3A%2F%2Frukminim2.flixcart.com%2Fimage%2F416%2F416%2Fkjvrdzk0%2Fmobile%2Ft%2Fx%2F3%2Fsamsung-galaxy-s21-ultra-sm-g998bzkginu-original-imafzck6uhtqufby.jpeg%3Fq%3D70&w=640&q=75",
        "https://dev-shopp.vercel.app/_next/image?url=https%3A%2F%2Frukminim2.flixcart.com%2Fimage%2F416%2F416%2Fkjvrdzk0%2Fmobile%2Ft%2Fx%2F3%2Fsamsung-galaxy-s21-ultra-sm-g998bzkginu-original-imafzcm2mrjc7hgk.jpeg%3Fq%3D70&w=640&q=75",
        "https://dev-shopp.vercel.app/_next/image?url=https%3A%2F%2Frukminim2.flixcart.com%2Fimage%2F416%2F416%2Fkjvrdzk0%2Fmobile%2Ft%2Fx%2F3%2Fsamsung-galaxy-s21-ultra-sm-g998bzkginu-original-imafzcm8pe6qh9r7.jpeg%3Fq%3D70&w=640&q=75",
        "https://dev-shopp.vercel.app/_next/image?url=https%3A%2F%2Frukminim2.flixcart.com%2Fimage%2F416%2F416%2Fkjvrdzk0%2Fmobile%2Ft%2Fx%2F3%2Fsamsung-galaxy-s21-ultra-sm-g998bzkginu-original-imafzck6tz342frv.jpeg%3Fq%3D70&w=640&q=75",
      ],
    },
  };
  return (
    <StyledProductCard>
      <div className="productImage">
        <img src={product.images.slider[0]} />
      </div>

      <div className="price&rating">
        <h4>{product.name}</h4>
        <span>
          {product.rating}
          <ImStarEmpty />
        </span>
        <p>₹{product.price}</p>
        <button>Add to Cart</button>
      </div>
    </StyledProductCard>
  );
}
