import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Character from './Character'
import Links from './Links'
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state = {
            people: [],
            page: 1
        }
    }  

    // Get initial 10 names
    componentDidMount(){
        axios.get('https://vschool-cors.herokuapp.com?url=https://swapi.co/api/people')
            .then(response => {
                console.log(response)
                this.setState({
                    people: response.data.results
                })
            })
            .catch(err => console.log(err))
    }

    // Get next 10 names
    nextPage = () => {
        this.setState(prevState => ({
            page: prevState.page + 1
        }), () => {
            axios.get(`https://swapi.co/api/people/?page=${this.state.page}`)
                .then(response => {
                    this.setState({
                        people: response.data.results
                    })
                })
        })
    }

    // Get previous 10 names
    prevPage = () => {
        this.setState(prevState => ({
            page: prevState.page - 1
        }), () => {
            axios.get(`https://swapi.co/api/people/?page=${this.state.page}`)
            .then(response => {
                this.setState({
                    people: response.data.results
                })
            })
        })
    }

    render(){
        return (
            <div className="app-container">
                <Switch>
                    {/* 
                        Must use "render" instead of "component" if you need
                        to pass 'props' from App down to a component sitting
                        on a Route
                     */}
                    <Route exact path="/" render={props => 
                                                <Links 
                                                    {...props} 
                                                    people={this.state.people}
                                                    page={this.state.page}
                                                    prevPage={this.prevPage}
                                                    nextPage={this.nextPage}/>
                                            }/>
                    {/* 
                        Using :id, the ':' denotes that the information after
                        this '/' will be dynamic depending on what the user
                        clicks on.  The user's input will be placed in the
                        props.match.params object: ex   params { id: 8253 }
                     */}
                    <Route exact path="/:id" component={Character}/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(App)