import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { StyledAppLayout } from "../styles/Styles";

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Outlet />
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
