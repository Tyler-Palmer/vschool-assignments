import React, { Component } from 'react'
import axios from 'axios'

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

    // handleSubmit = e => {
    //     e.preventDefault()
    //     const newText = {
    //         content: this.state.content
    //     }
    //     axios.post(`https://vschool-cors.herokuapp.com?url=https://gateway.watsonplatform.net/personality-insights/api`, newText,{headers: {'version': 'V3', 'iam_apikey':`${process.env.REACT_APP_KEY}`}})
    //     .then(response => {
    //         this.setState({
    //             responseData: response.data,
    //             content: ''
    //         })
    //         console.log(response.data)
    //     })
    // }

    render(){
        return(
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <input  type ="textarea"
                            name="content"
                            onChange={this.handleChange}
                            placeholder="You can enter as few as 100 words, but more words will give you more accurate analysis"
                            />
                    <button>Submit</button>
                </form>
                <div>

                </div>
            </div>
        )
    }
}

export default Main