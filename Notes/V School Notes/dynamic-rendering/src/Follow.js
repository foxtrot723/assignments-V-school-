import React from 'react'

const Follow = (props) => {
    return (
       <div>
           {props.status ?
            <button onClick={props.handleClick}><i class="far fa-thumbs-up"></i></button>
            :
            <button onClick={props.handleClick}><i class="far fa-thumbs-down"></i></button>
            }
       </div>
    )
}

export default Follow