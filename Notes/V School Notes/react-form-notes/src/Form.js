import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super()

        this.state = {
            myName: '',
            age: '',
            email: '',
            message: '',
            names: []
        }
    }

    handleChange = e => {
        console.log(this.state)
        this.setState({ 
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.state.names.push(this.state.myName)
        alert(`Name: ${this.state.myName}\nAge: ${this.state.age}\nE-mail: ${this.state.email}\nMessage: ${this.state.message}`)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name='myName' placeholder='Full name' value={this.state.myName} onChange={this.handleChange}/>
                <input type="number" name='age' placeholder='age' value={this.state.age} onChange={this.handleChange}/>
                <input type="email" name='email' placeholder='email' value={this.state.email} onChange={this.handleChange}/>
                <input type="textarea" name='message' placeholder='message' value={this.state.message} onChange={this.handleChange}/>
                <button>Submit</button>
                <h3>Name: {this.state.myName}</h3>
                <h3>Age: {this.state.age}</h3>
                <h3>E-mail: {this.state.email}</h3>
                <h3>Message: {this.state.message}</h3>
            </form>
        );
    }
}

export default Form;