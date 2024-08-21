import { useEffect } from "react";
import { supabase } from "./config/supabase.js";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import User from "./pages/User";
import Product from "./pages/Product";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import AuthRedirect from "./pages/AuthRedirect";
import Checkout from "./pages/Checkout.jsx";
import SignIn from "./pages/SignIn.jsx";

function App() {
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log(_event, session);
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path={"/"} element={<AuthRedirect />} />
          {/* <Route index element={<Navigate replace to="home" />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user" element={<User />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="store/:productId" element={<Product />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
