import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useSnackbar } from "./SnackbarContext";

export const WishlistContext = createContext(null);

export const WishlistProvider = (props) => {
  const [wishlist, setWishlist] = useState([]);
  const { showSnackbar } = useSnackbar();
  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
    showSnackbar("Product added to wishlist");
  };

  const checkInWishlist = (product) => {
    return wishlist.includes(product);
  };

  const removeFromWishlist = (product) => {
    const updatedWishlist = wishlist.filter((p) => p.id !== product.id);
    setWishlist(updatedWishlist);
    showSnackbar("Product removed from wishlist");
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        checkInWishlist,
      }}
    >
      {props.children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};
