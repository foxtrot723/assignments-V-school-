import React from 'react'
import Form from './Form'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: ""
    }
  }

  handleChange = e => {
    console.log(e)
    this.setState({  
      name: e.target.value
    })
  }

  handlesubmit = () => {
    e.preventDefault()
    const newBadge = {

    }
  }

  render() {
    return (
      <Form handleChange = { this.handleChange } />
    )
  }
}

export default App


// Goals For Today

// BE ABLE TO CREATE A FORM USING PROPS AND STATE FROM SCRATCH

// 5 PROBLEMS FOR APP ACADEMY

// 1 ALGORITHM PROBLEM

// fuck around with redux

