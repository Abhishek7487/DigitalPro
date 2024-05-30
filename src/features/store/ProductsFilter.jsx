import { Link } from "react-router-dom";
import { StyledProductFilter } from "../../styles/Styles";

function ProductsFilter() {
  return (
    <StyledProductFilter>
      <Link className="filter" to="/store">
        <img src="/public/store.webp" alt="store" />
        <span>All</span>
      </Link>
      <Link className="filter">
        <img src="/public/mobile.webp" alt="mobiles" />
        <span>Mobiles</span>
      </Link>
      <Link className="filter">
        <img src="/public/laptop.webp" alt="laptop" />
        <span>Laptops</span>
      </Link>
      <Link className="filter">
        <img src="/public/earphones.webp" alt="accessories" />
        <span>Accessories</span>
      </Link>
      <Link className="filter">
        <img src="/public/watch.webp" alt="watches" />
        <span>Smart watches</span>
      </Link>
      <Link className="filter">
        <img src="/public/tv.webp" alt="displays" />
        <span>TV & Display</span>
      </Link>
      <Link className="filter">
        <img src="/public/tablet.webp" alt="tablet" />
        <span>Tablet</span>
      </Link>
    </StyledProductFilter>
  );
}

export default ProductsFilter;
