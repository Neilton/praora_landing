import { ReactNode } from "react";
import { Outlet } from "react-router";
import Footer from "../Footer";
import NavBar from "../NavBar/";
interface LayoutProps {
  children?: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <NavBar />
        <Outlet/>
      <Footer />
    </div>
  );
}

export default Layout;
