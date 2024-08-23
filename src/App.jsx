import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import User from "./pages/User";
import Product from "./pages/Product";
import AppLayout from "./ui/AppLayout.jsx";
import PageNotFound from "./pages/PageNotFound";
import Checkout from "./pages/Checkout.jsx";
import SignIn from "./pages/SignIn.jsx";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<User />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="store/:productId" element={<Product />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
