import React from 'react'

const Greeting = (props) => {
    return (
       <div>
           {props.phrase === 'hello' ? 
           <h1>hello</h1>
           :
           <h1>goodbye</h1>
        }
       </div> 
    )
}

export default Greeting