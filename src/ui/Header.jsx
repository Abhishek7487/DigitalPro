import { StyledHeader } from "../styles/Styles";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LuUser } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useCartContext } from "../context/CartContext";

function Header() {
  const { cart } = useCartContext();
  //console.log(cart);
  const length = cart.length;
  return (
    <StyledHeader>
      <Link to="/home">DigitalPro</Link>
      <ul>
        <Link to="/store">Store</Link>
        <Link to="/">Mobiles</Link>
        <Link to="/">TV & Display</Link>
        <Link to="/">Laptop</Link>
        <Link to="/">Accessories</Link>
      </ul>
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
        <Link to="/">
          <LuUser />
        </Link>
      </div>
    </StyledHeader>
  );
}

export default Header;
