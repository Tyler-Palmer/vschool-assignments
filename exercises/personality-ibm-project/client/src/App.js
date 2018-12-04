import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import BarNav from './BarNav'
import Main from './Main'
import About from './About'
import Footer from './Footer'

class App extends Component {
    render() {
        return (
            <div>
                <BarNav />
                <Switch>
                    <Route path="/main" component={ Main } />
                    <Route path="/about" component={ About } />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default App