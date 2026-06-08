import { Outlet } from "react-router-dom";
import Navbar from "../Components/NAV/Navbar";
import Footer from "../Components/FOOTERS/footer";

const Layout = () => {
  return (
    <div>
      <Navbar/> 
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
