import React, { Component } from 'react'
import axios from 'axios'
import TextForm from './TextForm'

class Main extends Component{
    constructor(){
        super()
        this.state = {
            content: '',
            wordCount: '0',
            responseData: {}
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e =>{
        e.preventDefault()
        axios.post("/results",{content: this.state.content}).then(response => {
            console.log(response)
            this.setState({
                responseData:response.data,
                content:''
            })
        })
    }


    render(){
        return(
            <div>
                <TextForm   handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            content={this.state.content}
                            />
            </div>
        )
    }
}

export default Main