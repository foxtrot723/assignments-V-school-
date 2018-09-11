import React, { Component } from 'react'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            isDandy: false,
            favFood: ''
        }
    }

    handleChange = e => {
        const { name } = e.target
        const val = e.target.name === "isDandy" ? e.target.checked : e.target.value
        this.setState({
            [name]: e.target.value,
        })
    }

    handleSelect = e => {
        this.setState({favFood: e.target.value})

    }

    handleSubmit = e => {
        e.preventDefault()
        alert(`First Name: ${this.state.firstName}\nLast Name: ${this.state.lastName}`)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            
                <input 
                    type="text"
                    name="firstName"
                    onChange={this.handleChange}
                    value={this.state.firstName}
                    placeholder="First Name"/>

                <input 
                    type="text"
                    name="lastName"
                    onChange={this.handleChange}
                    value={this.state.lastName}
                    placeholder="Last Name"/>

                <label>Feeling Dandy?:
                    <input 
                        type="checkbox"
                        onChange={this.handleChange}
                        checked={this.state.isAlive}
                        name="isDandy"/>
                </label>

                <select onChange={this.handleSelect} value={this.state.favFood}>
                    <option value="-">---</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Creamed Herring">Creamed Herring</option>
                    <option value="Ice Cream">Ice Cream</option>
                </select>

                <button>Submit</button>
            </form>
        )
    }
}

export default Form