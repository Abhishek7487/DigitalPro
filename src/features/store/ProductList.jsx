import { useSearchParams } from "react-router-dom";
import useProducts from "../../services/useProducts";
import { StyledProductList } from "../../styles/Styles";
import ProductCard from "./ProductCard";

function ProductList() {
  const [searchParams] = useSearchParams();
  const products = useProducts();
  const filterValue = searchParams.get("category") || "all";

  let filteredProducts;
  if (filterValue === "all") filteredProducts = products;
  if (filterValue === "mobiles")
    filteredProducts = products.filter(
      (product) => product.category === "mobiles"
    );
  if (filterValue === "laptops")
    filteredProducts = products.filter(
      (product) => product.category === "laptops"
    );
  if (filterValue === "accessories")
    filteredProducts = products.filter(
      (product) => product.category === "accessories"
    );
  if (filterValue === "watches")
    filteredProducts = products.filter(
      (product) => product.category === "watches"
    );
  if (filterValue === "displays")
    filteredProducts = products.filter(
      (product) => product.category === "displays"
    );
  if (filterValue === "tablets")
    filteredProducts = products.filter(
      (product) => product.category === "tablets"
    );

  return (
    <StyledProductList>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledProductList>
  );
}

export default ProductList;
