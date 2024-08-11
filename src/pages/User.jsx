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
      {isAuthenticated ? (
        <>
          <header>Profile</header>
          <div className="user">
            <div className="userCard">
              <div className="profile">
                <img
                  src="https://avatars.githubusercontent.com/u/91866684?v=4"
                  alt="userImage"
                />
                <div>
                  <p>Hello</p>
                  <span>Abhishek</span>
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
                <img
                  src="https://avatars.githubusercontent.com/u/91866684?v=4"
                  alt="userImage"
                />
                <div className="info">
                  <div>
                    <span>Username:</span>
                    <p>Abhhishek7770</p>
                  </div>
                  <div>
                    <span>Email:</span>
                    <p>abhishekpatil7487@gmail.com</p>
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
