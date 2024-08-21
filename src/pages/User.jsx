import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { supabase } from "../config/supabase";
import { StyledUser } from "../styles/Styles";
import SignOutBtn from "../ui/SignOutBtn";
import SignInBtn from "../ui/SignInBtn";

import { TbUserSquareRounded } from "react-icons/tb";
import { PiShoppingBagOpenDuotone, PiTagBold } from "react-icons/pi";
import { MdCancelPresentation } from "react-icons/md";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";

/*

const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IlVRMFlGaHlyRWcrQ1VYL2EiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3N1dmt0eXFhbGN1ZXZweHhhdmt5LnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJlNGJiZjg5Yi0wNGZkLTQ3MTAtOGQ3Zi1jNjQ3NDFjZjA3NTYiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzIzNzMzOTc2LCJpYXQiOjE3MjM3MzAzNzYsImVtYWlsIjoiYWJoaXNoZWtwYXRpbDc0ODdAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJnb29nbGUiLCJwcm92aWRlcnMiOlsiZ29vZ2xlIl19LCJ1c2VyX21ldGFkYXRhIjp7ImF2YXRhcl91cmwiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NMMm54WmNOallCQXhjWi1wMEJ6QldzWlgzYlBvb29nNGtlTmd1T2l4STFpU2Fqdmhiaj1zOTYtYyIsImVtYWlsIjoiYWJoaXNoZWtwYXRpbDc0ODdAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZ1bGxfbmFtZSI6IkFiaGlzaGVrIFBhdGlsIiwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tIiwibmFtZSI6IkFiaGlzaGVrIFBhdGlsIiwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jTDJueFpjTmpZQkF4Y1otcDBCekJXc1pYM2JQb29vZzRrZU5ndU9peEkxaVNhanZoYmo9czk2LWMiLCJwcm92aWRlcl9pZCI6IjExODEwNDY4MDQyNzI2MjczNjY4NyIsInN1YiI6IjExODEwNDY4MDQyNzI2MjczNjY4NyJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6Im9hdXRoIiwidGltZXN0YW1wIjoxNzIzNzMwMzc2fV0sInNlc3Npb25faWQiOiI2MzZjNWRmNS02YmFmLTQ4NzUtYmI2Yy04NzcxNjVjNWE2YWUiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.aZ1yI0OqeQ2XE2ehStkjqU1vKWvajvGWzeWcmo9YtWs&expires_at=1723733976&expires_in=3600&provider_token=ya29.a0AcM612xYw4LXdhjm8ePUF76yPNxQEUQ2X7bmxtarHzYkHm1VG4Ozbr_FiW4Rm49rGiCBsnKQJWQoKtgQCIPBWHdjQG2yKDs8TkI4h9dompcw0GJFfVv3ysm1meRD1lJu09edjPLEUUN7AQHEa5d-jc3GbKa5kZfzWosaCgYKAVwSARESFQHGX2MiVBUeHt0-asO3GCkW2ukmmA0170");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://www.googleapis.com/oauth2/v3/userinfo", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
*/

function User() {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      supabase.auth.onAuthStateChange((_event, session) => {
        if (session?.user?.user_metadata) {
          setUser(session?.user?.user_metadata);
          setIsAuthenticated(true);
        }
      });
    }
    getUserData();
  }, []);

  return (
    <StyledUser>
      {isAuthenticated ? (
        <>
          <header>Profile</header>
          <div className="user">
            <div className="userCard">
              <div className="profile">
                <img src={`${user.avatar_url}`} alt="userImage" />
                <div>
                  <p>Hello</p>
                  <span>{user.full_name.split(" ")[0]}</span>
                </div>
              </div>
              <div className="profileActions">
                <div>
                  <TbUserSquareRounded />
                  <p>My Account</p>
                </div>
                <div>
                  <FaRegHeart />
                  <p>Wishlist</p>
                </div>
                <div>
                  <PiShoppingBagOpenDuotone />
                  <p>Orders</p>
                </div>
                <div>
                  <IoWalletOutline />
                  <p>Payments</p>
                </div>
                <div>
                  <FaRegStar />
                  <p>Ratings & Reviews</p>
                </div>
                <div>
                  <MdCancelPresentation />
                  <p>Cancel & Return</p>
                </div>
                <div>
                  <PiTagBold />
                  <p>Coupons</p>
                </div>
              </div>
              <SignOutBtn />
            </div>
            <div className="userDetails">
              <header>User Information</header>
              <main>
                <img src={user.avatar_url} alt="userImage" />
                <div className="info">
                  <div>
                    <span>Username:</span>
                    <p>{user.full_name}</p>
                  </div>
                  <div>
                    <span>Email:</span>
                    <p>{user.email}</p>
                  </div>
                  <SignOutBtn />
                </div>
              </main>
            </div>
          </div>
        </>
      ) : (
        <div className="userError">
          <p>Please Sign In to access this page</p>
          <SignInBtn />
        </div>
      )}
    </StyledUser>
  );
}

export default User;
