import React from 'react'
import {Switch, Route} from 'react-router-dom'
import axios from 'axios'
import Person from "./Person"
import Sidebar from './Sidebar'

class App extends React.Component{
    constructor(){
        super()
        this.state ={
            people: []
        }
    }

    componentDidMount(){
        axios.get(`https://swapi.co/api/people/`).then(response =>{
            console.log(response.data.results)
            this.setState({
                people: response.data.results
            })
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <Switch>
                    <Route path ="/" render = {props => {
                        return (
                        <Sidebar people = {this.state.people}/>
                        )}}/>
                    <Route path= "/:id" component = {Person}/>    
                </Switch>
            </div>
        )
    }
}

export default App