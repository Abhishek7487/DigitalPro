import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignOutUser from "./SignOutUser";
import { supabase } from "../config/supabase";

function User() {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  const handleSignOut = () => {
    supabase.auth.signOut();
    navigate("/");
  };

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          setUser(value.data.user);
          setIsAuthenticated(true);
        }
      }); //value.data.user to get user data
    }
    getUserData();
  }, []);
  return (
    <div>
      {isAuthenticated ? (
        <div className="user">
          <img src={user.picture} alt={user.nickname} />
          <p>{user.nickname}</p>
          <p>{user.email}</p>

          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <p>Please Sing In!</p>
        </div>
      )}
    </div>
  );
}

export default User;
