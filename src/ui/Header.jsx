import { StyledHeader } from "../styles/Styles";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LuUser } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { PiShoppingBagOpenLight } from "react-icons/pi";

import { CiUser } from "react-icons/ci";

import { SlUser } from "react-icons/sl";
import { MdMenu } from "react-icons/md";

import { useCartContext } from "../context/CartContext";

function Header() {
  const { cart } = useCartContext();

  return (
    <StyledHeader>
      <div>
        <Link to="/home">DigitalPro</Link>
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
