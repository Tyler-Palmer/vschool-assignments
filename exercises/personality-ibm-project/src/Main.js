import React, { Component } from 'react'
import axios from 'axios'

const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3')

class Main extends Component{
    constructor(){
        super()
        this.state = {
            rawText: '',
            wordCount: '0',
            responseData: {}
        }
        const personalityInsights = new PersonalityInsightsV3({
            version_date: '2018-12-1',
            iam_apikey: 'Process.env.REACT_APP_KEY',
            url: 'Process.env.REACT_APP_URL'
        })
    }

    handleChange(e){
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        axios.
    }

    render(){
        return(
            <div>
                <Form onSubmit ={this.handleSubmit}>
                    <Input  type ="textarea"
                            name="rawText"
                            onChange={this.handleChange}
                            placeholder="You can enter as few as 100 words, but more words will give you more accurate analysis"
                            />
                    <Button>Submit</Button>
                </Form>
                <div>

                </div>
            </div>
        )
    }
}

export default Main