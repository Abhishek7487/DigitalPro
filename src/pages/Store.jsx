import { Outlet } from "react-router-dom";
import ProductCard from "../features/store/ProductCard";
import ProductsFilter from "../features/store/ProductsFilter";
import SortingSidebar from "../features/store/SortingSidebar";
import ProductList from "../features/store/ProductList";

function Store() {
  return (
    <>
      <ProductsFilter />
      <ProductList />
      <SortingSidebar />
      <Outlet />
    </>
  );
}

export default Store;
