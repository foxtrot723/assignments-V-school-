import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Service from './Service'

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={ Home }/>
                    <Route path="/about" component={ About }/>
                    <Route path="/contact" component= { Contact } />
                    <Route path="/service" component= { Service } />
                </Switch>
                <Footer />

            </div>
        );
    }
}

export default App;