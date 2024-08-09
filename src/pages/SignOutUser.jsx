import { supabase } from "@supabase/auth-ui-shared";
import React from "react";
import { useNavigate } from "react-router-dom";

function SignOutUser() {
  const navigate = useNavigate();
  const handleSignOut = () => {
    supabase.auth.signOut();
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
export default SignOutUser;
