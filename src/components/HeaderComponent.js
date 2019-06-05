import React from 'react'
import { NavLink } from 'react-router-dom'
function Header(){
    return (
        <header>
            <div id="navbar">
                <div id="nav-banner">MovieFy</div>
                <div id="nav-button">
                    <ul>
                        <li>
                            <NavLink to="/home" className="nav-link">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" className="nav-link">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;