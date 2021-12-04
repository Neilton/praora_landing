import { Outlet } from "react-router";
import Footer from "../../Footer";

function Layout() {
  return (
    <div>
      <Outlet/>
      <Footer />
    </div>
  );
}

export default Layout;
