import React from 'react'

const Turtle = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.nickName}</h2>
            <h3>{props.weapon}</h3>
            <img src={props.image} />
        </div>
    )
}

export default Turtle