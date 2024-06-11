import { useParams } from "react-router-dom";
import useProducts from "../services/useProducts";
import ProductSlider from "../features/store/ProductSlider";
import { StyledProduct } from "../styles/Styles";

function Product() {
  const searchParams = useParams();
  const products = useProducts();
  const [activeProduct] = products.filter(
    (product) => product.id == searchParams.productId
  );

  return <></>;
}

export default Product;
