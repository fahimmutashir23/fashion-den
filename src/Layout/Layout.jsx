import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { useEffect, useState } from "react";

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
        <div className="bg-green-300 dark:bg-slate-900">
            <Navbar handleTheme={handleTheme} theme = {theme}></Navbar>
            <Outlet></Outlet>            
        </div>
    );
};

export default Layout;