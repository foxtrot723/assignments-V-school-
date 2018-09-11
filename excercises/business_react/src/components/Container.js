import React from "react"
import styles from "../styles/container.css"
import Boxes from "./Boxes"

const Container = () => {
    const boxInfo = [
        {
            color: "red",
            imgURL: "https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png",
            title: "HTML",
            button: "ABOUT"
        },
        {
            color: "green",
            imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBS-_lqzMv6Pf80K1F4GsNSK1WGW_dPFrlP2T7MczQJT7gtA16Q",
            title: "CSS",
            button: "ABOUT"
        },
        {
            color: "blue",
            imgURL: "data:image/png;base64,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",
            title: "JAVASCRIPT",
            button: "ABOUT"
        }
    ]
    const displayBoxes = boxInfo.map((box, i) => {
        return (
            <Boxes key={box.title + i}
                   color={box.color}
                   image={box.imgURL}
                   title={box.title}
                   button={box.button} />
        )
    })
    return (
        <div>
            <div className="box-container">
                {displayBoxes}
            </div>
        </div>
    )
}

export default Container