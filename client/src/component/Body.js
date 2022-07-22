import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Body(){
    return (
        <div className="body">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Body;