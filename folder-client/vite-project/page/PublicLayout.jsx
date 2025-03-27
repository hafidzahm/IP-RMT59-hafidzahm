import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
export default function PublicLayout() {
  return (
    <>
      <Navbar/>

      <Outlet />
      <Footer/>
    </>
  );
}
