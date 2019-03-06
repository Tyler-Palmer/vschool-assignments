import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Footer from './Footer'

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route  exact path="/" component={Home}/>
                    <Route  path ="/about" component={About}/>
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default App