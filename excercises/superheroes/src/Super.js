import React from 'react'

const Super = (props) => {
    const runThis = () => {
        alert(props.catchPhrase)
      }
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.realName}</h2>
            <h3>{props.nemesis}</h3>
            <img src={props.image} />
            <button className="App" onClick={runThis}>click it!</button>
        </div>
    )
}

export default Super