import React, { Component } from 'react'


class UglyThing extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            description: '',
            imgUrl: ''
        }
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <img src={this.props.imgUrl}></img>
            </div>
        )
    }
}

export default UglyThing