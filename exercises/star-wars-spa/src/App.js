import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import axios from 'axios'
import Sidebar from './Sidebar'
import Home from './Home'

class App extends React.Component{
    constructor(){
        super()
        this.state ={
            people: []
        }
    }

    componentDidMount(){
        axios.get(`https://swapi.co/api/people/`).then(response =>{
            this.setState({
                people: response.data.results
            })
        })
    }

    render(){
        return(
            <div>
                <Sidebar />
                <Switch>
                        <Route exact path ="/" component ={Home}/>
                </Switch>
            </div>
        )
    }
}

export default App