import { StyledHeader } from "../styles/Styles";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LuUser } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { MdMenu } from "react-icons/md";

import { useCartContext } from "../context/CartContext";

function Header() {
  const { cart } = useCartContext();
  const length = cart.length;
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <div>
        <Link to="/home">DigitalPro</Link>
        <Link to="/store">Store</Link>
      </div>

      <div>
        <Link to="/">
          <IoSearchOutline />
        </Link>
        <Link to="/cart">
          <LiaShoppingBagSolid />
          {length}
        </Link>
        <div>
          <MdMenu />
        </div>
        <Link to="/user">
          <LuUser />
        </Link>
      </div>
    </StyledHeader>
  );
}

export default Header;
