import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignOutUser from "./SignOutUser";
import { supabase } from "../config/supabase";

function User() {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUserData().then((value) => {
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
    <StyeldUser>
      {isAuthenticated && (
        <div className="user">
          <img src={user.picture} alt={user.nickname} />
          <p>{user.nickname}</p>
          <p>{user.email}</p>

          <SignOutUser />
        </div>
      )}
    </StyeldUser>
  );
}

export default User;
