import React from 'react'
import { addOne } from '../redux'
import { subOne } from '../redux'
import { multNum } from '../redux'
import { divNum } from '../redux'
import { connect } from 'react-redux'

const Controls = props => {
    return (
        <div>
            <button onClick = { props.addOne } >Add</button>
            <button onClick = { props.subOne } >Sub</button>
            <button onClick = { props.multNum } >Multiply</button>
            <button onClick = { props.divNum } >Divide</button>
        </div>
    )
}

export default connect( null, { addOne, subOne, multNum, divNum } )(Controls)


