import React, { Component } from 'react'
import axios from 'axios'

const { Provider, Consumer } = React.createContext()

//  getPhotos, getSinglePhoto(id), deletePhoto(id), editPhoto(id, updates), createPhoto(newPhoto)

export default class PhotoProvider extends Component {
    constructor(){
        super()
        this.state = {
            photos: []
        }
    }

    getPhotos = () => {
        axios.get('https://api.vschool.io/testing/todo').then(res => {
            this.setState({
                photos: res.data
            })
        })
        .catch(err => console.log(err))
    }

    addPhoto = newPhoto => {
        axios.post('https://api.vschool.io/testing/todo', newPhoto)
            .then(res => {
                this.setState(prevState => {
                    return {
                        photos: [res.data, ...prevState.photos]
                    }
                })
            })
    }

    render(){
        return (
            <Provider value={{
                photos:    this.state.photos,
                getPhotos: this.getPhotos,
                addPhoto:  this.addPhoto
            }}>
                { this.props.children }
            </Provider>
        )
    }
}


export const withPhotos = C => props => (
    <Consumer>
        { value => <C {...props} {...value}/> }
    </Consumer>
)