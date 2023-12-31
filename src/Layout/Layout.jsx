import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";

const Layout = () => {

    const [theme, setTheme] = useState("light");

    useEffect(()=> {
        if(theme === "dark"){
            document.documentElement.classList.add("dark")
        } else{
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const handleTheme = () => {
        setTheme(theme === "dark"? "light" : "dark")
    }

    return (
        <div>
            <Navbar handleTheme={handleTheme} theme = {theme}></Navbar>
            <div className="bg-[#c3d7c6] dark:bg-slate-900">
            <div className=" max-w-6xl mx-auto">
            <Outlet></Outlet>            
            </div>
            <Footer></Footer>
        </div>

        </div>
    );
};

export default Layout;