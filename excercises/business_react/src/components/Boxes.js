import React from "react"
import styles from "../styles/boxes.css"

const Boxes = (props) => {

    return (
        <div>
            <div className="boxes">
                {/* <div className="moving-circle" style={props.color}></div> */}
                <div className="imgFlexCon"><div className="pic-container"><img className="images" src={props.image} /></div></div>
                <div className="text-container">
                    <h1 className="title mini-titles">{props.title}</h1>
                </div>
                <button>{props.button}</button>
            </div>
        </div>
    )
}

export default Boxes