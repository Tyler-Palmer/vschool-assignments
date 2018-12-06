import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PhotoList from './components/PhotoList'
import { withPhotos } from './context/PhotoProvider'

class App extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            imgUrl: ''
        }
    }

    componentDidMount(){
        this.props.getPhotos()
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addPhoto(this.state)
        this.setState({ title: '', imgUrl: ''}) 
    }

    render(){
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={props => <PhotoList 
                                                                {...props} 
                                                                handleChange={this.handleChange}
                                                                handleSubmit={this.handleSubmit}
                                                                {...this.state}
                                                            />}/>
                </Switch>
            </div>
        )
    }
}

export default withPhotos(App)