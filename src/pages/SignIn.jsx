import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect } from "react";
import { supabase } from "../config/supabase";
import { useNavigate } from "react-router-dom";
import { StyledSignInPage } from "../styles/Styles";

function SignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event) => {
      if (event == "SIGNED_IN") {
        navigate("/user");
      } else {
        navigate("/signIn");
      }
    });
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
