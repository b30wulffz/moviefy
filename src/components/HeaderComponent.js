import React from 'react'
import { NavLink } from 'react-router-dom'
function Header(){
    const navbar = (event) => {
      event.preventDefault();
      var x = document.getElementById("myTopnav");

      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }

    return (

        <header>
            <div id="navbar">
                <div id="nav-banner">MovieFy</div>
                <div id="nav-button">
                <div class="topnav" id="myTopnav">
                    <NavLink to="/home" className="nav-link">Home</NavLink>
                    <NavLink to="/add_movie" className="nav-link">Add movie</NavLink>
                    <NavLink to="/login" className="nav-link">Login</NavLink>
                    <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
                    <NavLink to="javascript" className="icon" onClick={navbar}>
                    <i class="fa fa-bars"></i>  
                    </NavLink>
                </div>
                </div>
            </div>
        </header>
    );
}

export default Header;