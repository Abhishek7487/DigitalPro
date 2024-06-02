import ProductsFilter from "../features/store/ProductsFilter";
// import SortingSidebar from "../features/store/SortingSidebar";
import ProductList from "../features/store/ProductList";
import { Main, StyledStoreLayout } from "../styles/Styles";

function Store() {
  return (
    <StyledStoreLayout>
      <ProductsFilter />
      <Main>
        <ProductList />
      </Main>
      {/* <SortingSidebar /> */}
    </StyledStoreLayout>
  );
}

export default Store;
