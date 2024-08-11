import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledSignOutBtn } from "../styles/Styles";
import { supabase } from "../config/supabase";

function SignOutBtn() {
  const navigate = useNavigate();
  const handleSignOut = () => {
    supabase.auth.signOut();
    navigate("/");
  };

  return <StyledSignOutBtn onClick={handleSignOut}>Sign Out</StyledSignOutBtn>;
}
export default SignOutBtn;
