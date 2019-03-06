import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Bounties from './components/Bounties'
class App extends Component {
  render() {
    return (
      <div>
          
          <Switch>
            <Route path='/' component={Bounties}></Route>
          </Switch>
      </div>
    )
  }
}

export default App
