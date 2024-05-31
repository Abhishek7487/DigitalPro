import { useSearchParams } from "react-router-dom";
import { StyledProductFilter } from "../../styles/Styles";

function ProductsFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleClick(value) {
    searchParams.set("category", value);
    setSearchParams(searchParams);
  }
  return (
    <StyledProductFilter>
      <div onClick={() => handleClick("all")}>
        <img src="/public/store.webp" alt="store" />
        <span>All</span>
      </div>
      <div onClick={() => handleClick("mobiles")}>
        <img src="/public/mobile.webp" alt="mobiles" />
        <span>Mobiles</span>
      </div>
      <div onClick={() => handleClick("laptops")}>
        <img src="/public/laptop.webp" alt="laptops" />
        <span>Laptops</span>
      </div>
      <div onClick={() => handleClick("accessories")}>
        <img src="/public/earphones.webp" alt="accessories" />
        <span>Accessories</span>
      </div>
      <div onClick={() => handleClick("watches")}>
        <img src="/public/watch.webp" alt="watches" />
        <span>Smart watches</span>
      </div>
      <div onClick={() => handleClick("displays")}>
        <img src="/public/tv.webp" alt="displays" />
        <span>TV & Displays</span>
      </div>
      <div onClick={() => handleClick("tablets")}>
        <img src="/public/tablet.webp" alt="tablets" />
        <span>Tablets</span>
      </div>
    </StyledProductFilter>
  );
}

export default ProductsFilter;
