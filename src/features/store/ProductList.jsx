import { useSearchParams } from "react-router-dom";
import useProducts from "../../services/useProducts";
import { StyledProductList } from "../../styles/Styles";
import ProductCard from "./ProductCard";

const getFilteredProducts = (categoryFilter, products) => {
  if (categoryFilter === "all") return products;
  return products.filter((product) => product.category === categoryFilter);
};

function ProductList() {
  const [searchParams] = useSearchParams();
  const products = useProducts();
  const filterValue = searchParams.get("category") || "all";
  const sortedValue = searchParams.get("price") || "all";
  const rangeValue = searchParams.get("range") || "all";

  let filteredProducts = getFilteredProducts(filterValue, products);

  if (sortedValue === "h2l") filteredProducts.sort((a, b) => b.price - a.price);
  else if (sortedValue === "l2h")
    filteredProducts.sort((a, b) => a.price - b.price);

  return (
    <StyledProductList>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledProductList>
  );
}

export default ProductList;
