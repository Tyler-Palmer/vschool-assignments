import React, { Component } from 'react'
import CharacterList from './components/CharacterList'
import { Switch, Route } from 'react-router-dom'
import { withCharacter } from './context/CharacterProvider'
import axios from 'axios'

class App extends Component {
    componentDidMount(){
        this.props.getData()  
    }


    render(){
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={props => <CharacterList {...props} />}/>
                </Switch>
            </div>
        )
    }
}

export default withCharacter(App)