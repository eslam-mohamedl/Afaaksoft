import Navbar from "./components/organisms/Navbar";
import { Outlet } from "react-router-dom";
export default function App() {

  return (
    <>
     <Navbar/>
     {/* هنا الصفحات هتظهر */}
      <div className="md:px-16 sm:px-10 px-4 pt-20"> 
        <Outlet  />
     
      </div>
    </>
  );
}
