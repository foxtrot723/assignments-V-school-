import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import Login from './components/login/Login'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path = '/' component = { Home }/>
          <Route path = '/about' component = { About }/>
          <Route path = '/login' component = { Login }/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
