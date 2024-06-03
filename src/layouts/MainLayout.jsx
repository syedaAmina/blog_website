import { Outlet } from "react-router-dom";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";


function MainLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>

        </div>
  )
}

export default MainLayout