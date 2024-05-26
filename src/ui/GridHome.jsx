import useProducts from "../services/useProducts";
import { StyledGrid } from "../styles/Styles.js";
function GridHome() {
  const products = useProducts();

  return (
    <StyledGrid>
      {products.map(
        (product) =>
          product?.productBanner && (
            <img src={product.productBanner} alt="image" />
          )
      )}
    </StyledGrid>
  );
}

export default GridHome;
