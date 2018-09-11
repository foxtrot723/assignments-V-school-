import React from 'react'
import { connect } from 'react-redux'


const Display = props => {
    return (
        <div>
            <h1>{ props.hours }</h1>
            <h1>{ props.minutes }</h1>
            <h1>{ props.seconds }</h1>
            <h1>{ props.milliseconds }</h1>
        </div>
    )
}

export default connect(state=>state, {})(Display)