import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Main from './Main'
import About from './About'

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route path="/main" component={ Main } />
                    <Route path="/about" component={ About } />
                </Switch>
            </div>
        )
    }
}

export default App