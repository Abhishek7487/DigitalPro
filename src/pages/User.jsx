import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignOutUser from "./SignOutUser";
import { supabase } from "../config/supabase";
import { StyledUser } from "../styles/Styles";

function User() {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          console.log(value.data.user);
          setUser(value.data.user);
          setIsAuthenticated(true);
        }
      }); //value.data.user to get user data
    }
    getUserData();
  }, []);
  return (
    <StyledUser>
      {isAuthenticated && (
        <div className="user">
          <img src={user.picture} alt={user.nickname} />
          <p>{user.nickname}</p>
          <p>{user.email}</p>

          <SignOutUser />
        </div>
      )}
    </StyledUser>
  );
}

export default User;
