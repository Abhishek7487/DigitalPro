import { StyledHeader } from "../styles/Styles";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LuUser } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { filters } from "../services/CategoryFilters";

function Header() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  function handleClick(value) {
    searchParams.set("category", value);
    setSearchParams(searchParams);
    navigate(`/store?${searchParams.toString()}`);
  }

  return (
    <StyledHeader>
      <Link to="/home">DigitalPro</Link>
      <ul>
        {filters.map(({ value, label }) => (
          <li key={value} onClick={() => handleClick(value)}>
            {label}
          </li>
        ))}
      </ul>
      <div>
        <Link to="/">
          <IoSearchOutline />
        </Link>
        <Link to="/cart">
          <LiaShoppingBagSolid />
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
