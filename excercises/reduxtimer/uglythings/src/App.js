import React, { Component } from 'react';
import './App.css';
import { Switch } from 'react-redux'
import { Route } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch />
          <Route exact path="./" />
          <Route path="./about" />
          <Route path="./contact" />
        <Switch />
        <Footer /> 
      </div>
    )
  }
}

export default App;
