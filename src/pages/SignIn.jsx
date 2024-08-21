// import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect } from "react";
import { supabase } from "../config/supabase";
// import { useNavigate } from "react-router-dom";
// import { StyledSignInPage } from "../styles/Styles";

// function SignIn() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     supabase.auth.onAuthStateChange( (_event, session) => {
//       console.log(session);

//       if (_event == "SIGNED_IN") {
//         // navigate("/user");
//       } else {
//         // navigate("/signIn");
//       }
//     });
//   }, []);

//   return (
//     <StyledSignInPage>
//       <button
//         onClick={async () => {
//           await supabase.auth.signInWithOAuth({
//             provider: "google",
//             options: {
//               redirectTo: `/dasdas`,
//             },
//           });
//         }}
//       >
//         Signin
//       </button>
//     </StyledSignInPage>
//   );
// }

// export default SignIn;

const SignIn = () => {
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log(_event, session);
    });
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <button
        onClick={async () => {
          await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
              redirectTo: `/dasdas`,
            },
          });
        }}
      >
        Signin
      </button>
    </div>
  );
};

export default SignIn;
