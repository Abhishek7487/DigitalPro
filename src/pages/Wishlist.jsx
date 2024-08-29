import { StyledCart, StyledWishlist } from "../styles/Styles";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserConetxt";
import { useSnackbar } from "../context/SnackbarContext";
import { useWishlist } from "../context/WishlistContext";
import { formatter } from "../utils/useCurrencyFormatter";
import { AddCartButton } from "../components/AddCartButton";

function Cart() {
  const { wishlist, removeFromWishlist } = useWishlist();

  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();
  const { isAuthenticated } = useAuth();

  return (
    <StyledWishlist>
      {wishlist.map((product) => (
        <div className="wishlistProductCard" key={product.id}>
          <img
            src={product.productImages[0]}
            onClick={() => navigate(`/store/${product.id}`)}
          />
          <h2 onClick={() => navigate(`/store/${product.id}`)}>
            {product.name}
          </h2>
          <p>{formatter.format(product.price)}</p>
          <AddCartButton product={product} />

          <button
            className="crossWishlistButton"
            onClick={() => removeFromWishlist(product)}
          >
            <RxCross2 />
          </button>
        </div>
      ))}
    </StyledWishlist>
  );
}

export default Cart;
