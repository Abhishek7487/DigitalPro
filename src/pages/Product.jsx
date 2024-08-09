import { useParams } from "react-router-dom";
import useProducts from "../services/useProducts";
import ProductSlider from "../features/store/ProductSlider";
import { StyledProduct } from "../styles/Styles";
import ProductOperations from "../features/store/ProductOperations";
import { formatter } from "../utils/useCurrencyFormatter";

function Product() {
  const searchParams = useParams();
  const products = useProducts();
  const [activeProduct] = products.filter(
    (product) => product.id == searchParams.productId
  );
  if (!activeProduct) {
    return null;
  }
  return (
    <StyledProduct>
      <ProductSlider productImages={activeProduct?.productImages} />
      <div className="productInfo">
        <p>{activeProduct?.name}</p>
        <span>{activeProduct?.rating}</span>
        <p>{formatter.format(activeProduct?.price)}</p>
        <ul>
          {activeProduct?.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>
      <ProductOperations product={activeProduct} />
    </StyledProduct>
  );
}

export default Product;
