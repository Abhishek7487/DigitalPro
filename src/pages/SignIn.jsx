import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../config/supabase";
import { StyledSignInPage } from "../styles/Styles";
import { useAuth } from "../context/UserConetxt";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function SignIn() {
  const { event, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (event === "SIGNED_IN") {
      console.log(event);
      navigate("/user");
    }
  }, []);

  return (
    <StyledSignInPage>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="light"
        providers={["google"]}
      />
    </StyledSignInPage>
  );
}

export default SignIn;
