import React from "react"
import styles from "../styles/navbar.css"

const Navbar = () => {
    return (
        <div className="nav-container">
            <a href="#main-menu" 
               class="menu-toggle" 
               role="button"
               id="main-menu-toggle"
               aria-expanded="false"
               aria-controls="main-menu"
               aria-label="Open main menu">
                    <span class="sr-only">Open main menu</span>
                    <span class="fa fa-bars"></span>
            </a>
            <nav id="main-menu" class="main-menu">
                <a href="#main-menu-toggle" 
                   class="menu-close"
                   role="button"
                   id="main-menu-close"
                   aria-expanded="false"
                   aria-controls="main-menu"
                   aria-label="Close main menu">
                    <span class="sr-only">Close main menu</span>
                    <span class="fa fa-close"></span>
                </a>
                <ul>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                
            </nav>
            <a href="#main-menu-toggle"
                   class="backdrop"
                   tabindex="-1"
                   aria-hidden="true"
                   hidden>
            </a>        
        </div>
    )
}

export default Navbar