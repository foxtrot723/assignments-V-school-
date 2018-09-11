import React from 'react'
import { connect } from 'react-redux'
import { setTimer } from '../redux'


const Control = props => {

    const startTime = () => {
        setInterval( props.setTimer, 10)
    }

    return (
        <div>
            <button onClick = { startTime }>Submit</button>
        </div>
    )
}

export default connect(null, { setTimer })(Control)