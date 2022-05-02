import React, { useState } from "react";
import ReactDOM from "react-dom";
import logo from './recordlogo.svg';




const Navbar = () => {

    const openNav = function () {
        document.querySelector(".over-lay").style.display = 'block';
      }
    const closeNav = function () {
      document.querySelector(".over-lay").style.display = 'none';
    }

    return (
      <main className="main-nav">
        <nav className="over-lay">
            <a href="" class="closebtn" onclick={closeNav}>&times;</a>
             <ul className="overlay-content">
                <a href="#">Home</a>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">About</a>
                <a href="#">Contact</a>

              </ul>         
        </nav>
        
        <nav className="navbar">
          <h1>AceRec<span><img src={logo} className="App-logo" alt="logo" /></span>rd</h1>
          <div className="links">
            <ul>
                <li>Home</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>

            </ul>
               
        </div>       
     </nav>
     <a className="open-btn" onClick={openNav}>&#9776;</a>
      </main>
      );
}
 
export default Navbar;