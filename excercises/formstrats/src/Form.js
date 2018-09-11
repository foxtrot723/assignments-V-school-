import React from 'react'

const Form = props => {
    console.log(props)
    return (
        <form onSubmit = { props.handleSubmit }>
            <div className="my-form-box">
                <input placeholder = "First Name"
                        className="input-1" 
                       value = { props.firstName } 
                       name = "firstName"
                       onChange = { props.handleChange } required />

                <input placeholder = "Last Name" 
                        className="input-2"
                       value = { props.lastName } 
                       name = "lastName" 
                       onChange = { props.handleChange } required />

                <input placeholder = "Age"
                        className="input-3" 
                       value = { props.age } 
                       name = "age"
                       onChange = { props.handleChange } required />

                <input placeholder = "Phone"
                        className="input-4" 
                       value = { props.phone } 
                       name = "phone"
                       onChange = { props.handleChange } required />

                <input placeholder = "Email"
                        className="input-5" 
                       value = { props.email }
                       name = "email"
                       onChange = { props.handleChange } required />

                <input placeholder = "Password"
                        className="input-6" 
                       value = { props.password } 
                       name = "password"
                       onChange = { props.handleChange } required />

                <button className="my-button">Submit</button>
            </div>
        </form>
    )
}

export default Form 