import React from 'react'

const Box = (props) => {
    
    const styles = {
        border: "1px solid black",
        boxSizing: "border-box",
        height: "100px",
        width: "100px"
    }

    return (
        <div>
            <div style={styles} backGroundColor={props.color}></div>
        </div>
    )
}

export default Box