import useProducts from "../../services/useProducts";
import { StyledProductList } from "../../styles/Styles";
import ProductCard from "./ProductCard";

function ProductList() {
  const products = useProducts();
  console.log(products);
  return (
    <StyledProductList>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledProductList>
  );
}

export default ProductList;
