import React from 'react'
import Like from './Like'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      status: true
    }
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        status: !prevState.status
      }
    })
  }

  render() {
    return (
      <Like status={this.state.status} handleClick={this.handleClick} />
    )
  }
}

export default App
