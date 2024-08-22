import { StyledHeader } from "../styles/Styles";
import { Link } from "react-router-dom";
import { PiShoppingBagOpenLight } from "react-icons/pi";
import { SlUser } from "react-icons/sl";
import { MdMenu } from "react-icons/md";
import { useCartContext } from "../context/CartContext";

function Header() {
  const { cart } = useCartContext();

  return (
    <StyledHeader>
      <div>
        <Link to="/">DigitalPro</Link>
        <Link to="/store">Store</Link>
      </div>

      <div>
        <Link to="/cart">
          <span className="cart">
            <PiShoppingBagOpenLight className="cartIcon" />
            <p className="cartItemCount">{cart.length}</p>
          </span>
        </Link>
        <div>
          <MdMenu />
        </div>
        <Link to="/user">
          <SlUser />
        </Link>
      </div>
    </StyledHeader>
  );
}

export default Header;
