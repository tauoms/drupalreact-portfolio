import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <header>
        <Header />
        <Outlet />
      </header>

      <Footer />
    </>
  );
};

export default Layout;
