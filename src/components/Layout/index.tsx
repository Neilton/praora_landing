import { ReactNode } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router";
import Footer from "../Footer";
import NavBar from "../NavBar/";

function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet/>
      <Footer />
    </div>
  );
}

export default Layout;
