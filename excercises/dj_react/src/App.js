import React, { Component } from 'react';
// import './index.css';
import Box from './Box'

class App extends Component {
  constructor() {
    super()
    this.state = {
      color: "white",
      color1: "black",
      color2: "blue",
      color3: "red",
      color4: "orange"
    }
  }
      
  makeBlack = () => {
    this.setState(prevState => {
        return {
          color: "black"
        }
    })
  }

  makeBlue = () => {
    this.setState(prevState => {
        return {
          color: "blue"
        }
    })
  }

  makeRed = () => {
    this.setState(prevState => {
      return {
        color: "red"
      }
    })
  }

  makeOrange = () => {
    this.setState(prevState => {
      return {
        color: "orange"
      }      
    })
  }



    render() {
      const styles = {
        display: "grid",
        gridTemplate: "repeat(2, 100px) / repeat(2, 100px)",
        gridGap: "5px"
      }
      return (
        <div style={styles}>
          <Box color={this.color} makeBlack={this.makeBlack} />
        </div>
      );
    }
}

export default App;
