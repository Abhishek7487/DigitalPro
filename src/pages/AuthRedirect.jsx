import { useEffect } from "react";

const AuthRedirect = () => {
  useEffect(() => {
    console.log(window.location.href);
  }, []);
  return <div>AuthRedirect</div>;
};

export default AuthRedirect;
