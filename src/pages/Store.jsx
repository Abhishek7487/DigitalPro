import { Outlet } from "react-router-dom";
import ProductCard from "../features/store/ProductCard";

function Store() {
  return (
    <div>
      <ProductsFilter />
      <SortingSidebar />
      <Outlet />
      <ProductCard />
    </div>
  );
}

export default Store;
