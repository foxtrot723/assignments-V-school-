import React from "react"
import styles from "../styles/head.css"
import Navbar from "./Navbar"

const Head = () => {
    return (
        <div>
            <div className="my-header">
                <h1 className="title">Gotta Love React</h1>
                <Navbar />
            </div>
        </div>
    )
}

export default Head