import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import BarNav from './components/BarNav'
import Main from './containers/Main'
import About from './containers/About'
import Footer from './containers/Footer'
import Home from './containers/Home'
import { withResults } from './context/ResultsProvider'
import './style.css'

class App extends Component {
    render() {
        return (
            <div id="first-div">
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