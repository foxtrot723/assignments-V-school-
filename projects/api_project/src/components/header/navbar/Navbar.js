import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

class Navbar extends React.Component {
    render() {
        return (
            <div className = "navbar-container">
                <ul className = "navbar-ul">
                    <li className = "navbar-li"><Link className="links" to = "/">Home</Link></li>
                    <li className = "navbar-li"><Link className="links" to = "/about">Fighters</Link></li>
                    <li className = "navbar-li"><Link className="links" to = "/login">Log In</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar