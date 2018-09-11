import React from 'react'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      images: [],
      names: []
    }
  }

componentDidMount() {
  axios.get("http://api.vschool.io:6543/hitlist.json")
  .then(response => {
    this.setState = () => {
      return {
         images: [response.names]
      }
    }
    console.log(response.data)
  })
  .catch(function(error){
    console.log(error)
  })
}

  render() {
    return (
      <div>{this.state.names}</div>
    )
  }
}

export default App
 