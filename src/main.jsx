import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { CartProvider } from "./context/CartContext.jsx";
import { SnackbarProvider } from "./context/SnackbarContext";
import { UserProvider } from "./context/UserConetxt.jsx";
import { BrowserRouter } from "react-router-dom";
import Snackbar from "./components/Snackbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <SnackbarProvider>
          <CartProvider>
            <App />
            <Snackbar />
          </CartProvider>
        </SnackbarProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
