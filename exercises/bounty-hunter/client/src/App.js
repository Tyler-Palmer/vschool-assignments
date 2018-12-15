import React, { Component } from 'react'
import BountyForm from './components/Bountyform'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Bounties from './components/Bounties'
class App extends Component {
  render() {
    return (
      <div>
          {/* <BountyForm /> */}
          <Switch>
            <Route path='/' component={Bounties} />
          </Switch>
      </div>
    )
  }
}

export default App
