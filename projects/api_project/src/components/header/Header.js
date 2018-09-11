import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import './header.css'
import './navbar/navbar.css'



class Header extends React.Component {
    render() {
        return (
            <div className = "header-wrap" >
                <Link className = "logo" to = "/" ><h1>Fat Stats</h1></Link>
                <input className = "nav-toggle" type = "checkbox" id = "nav-toggle" />
                <label className = "nav-toggle-label" htmlFor = "nav-toggle" >
                    <span></span>
                </label>
                <Navbar />
            </div>
        )
    }
}

export default Header