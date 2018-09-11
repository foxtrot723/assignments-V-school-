import React from 'react'

const Form = props => {
    return (
        <form onSubmit = { props.handleSubmit }>
            <input placeholder = "Michael is a beast" type = "text" name = "name" value = { props.name } onChange = { props.handleChange } />
            <button>Submit</button>
        </form>
    )
}

export default Form