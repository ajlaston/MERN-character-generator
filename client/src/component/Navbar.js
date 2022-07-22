import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {

    return (
        <nav>
            <h2>RPG Character Generator</h2>
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/saved">Saved</Link>
                <Link to="/settings">Settings</Link>
            </div>
        </nav>
    )
}

export default Navbar;