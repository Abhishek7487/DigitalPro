import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { CartProvider } from "./context/CartContext.jsx";
import Snackbar from "./component/Snackbar.jsx";
import { SnackbarProvider } from "./context/SnackbarContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider>
      <CartProvider>
        <App />
        <Snackbar />
      </CartProvider>
    </SnackbarProvider>
  </React.StrictMode>
);
