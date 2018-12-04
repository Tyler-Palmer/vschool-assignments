import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import BarNav from './BarNav'
import Main from './Main'
import About from './About'
import Footer from './Footer'
import Home from './Home'
import { withResults } from './context/ResultsProvider'

class App extends Component {
    render() {
        return (
            <div>
                <BarNav />
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/main" render= {props => <Main {...props}/>} />
                    <Route path="/about" component={ About } />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withResults(App)