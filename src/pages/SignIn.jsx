import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../config/supabase";
import { StyledSignInPage } from "../styles/Styles";

function SignIn() {
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
