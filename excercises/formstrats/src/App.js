import React from 'react'
import Form from './Form'
import InfoCard from './InfoCard'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      phone: '',
      password: '',
      data: []
    }
  }

  handleChange = event => {
    this.setState( { [event.target.name]: event.target.value } )
  }

  handleSubmit = event => {
    event.preventDefault()
    const newCard = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password
    }

    this.setState(prevState => ({
      data: [...prevState.data, newCard],
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      phone: '',
      password: ''
    }))
  }

  render() {

    return (
      <div>
        <div>
          <Form handleSubmit = { this.handleSubmit }
                handleChange = { this.handleChange } 
                firstName = { this.state.firstName }
                lastName = { this.state.lastName }
                age = { this.state.age }
                email = { this.state.email }
                phone = { this.state.phone }
                password = { this.state.password }
                />
        </div>
        <div>
          { this.state.data.map(info => <InfoCard {...info} />)}
        </div>
      </div>
    )
  }
}

export default App




