import React, { Component } from 'react'
import { withVideoGames } from './context/VideoGameProvider'
import Form from './shared/Form'
import AddGameForm from './AddGameForm'

// This page can use a the renderProp form, or the form
// written into this component.  To switch, comment out the 
// <Form /> component, and uncomment the constructor,super,state,
// handlechange, handlesubmit, and <form>

class App extends Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         title: ''
    //     }
    // }

    componentDidMount(){
        this.props.getVideoGames()
    }

    // handleChange = e => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    
    // handleSubmit = e => {
    //     e.preventDefault()
    //     this.props.addVideoGame(this.state)
    //     this.setState({ title: '' })
    // }

    render(){
        return (
            <div>
                {/* <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        value={this.state.title} 
                        name="title" 
                        onChange={this.handleChange} 
                        placeholder="Title"/>
                    <button>Submit</button>
                </form> */}
                <Form 
                    userInputs={{ title: '' }}
                    submit={inputs => this.props.addVideoGame(inputs)}
                    render={props => <AddGameForm {...props}/>}
                />
               { this.props.videoGames.map(game => <h1>{game.title}</h1>)}
            </div>
        )
    }
}

export default withVideoGames(App)