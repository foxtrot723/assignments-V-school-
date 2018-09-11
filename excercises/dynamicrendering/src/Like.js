import React from 'react'

const Like = (props) => {
    return (
        <div>
            {
                props.status ?
                <button onClick={props.handleClick}>hey</button>
                :
                <button onClick={props.handleClick}>ho</button>
            }
        </div>
    )
}

export default Like