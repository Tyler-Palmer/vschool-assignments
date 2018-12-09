import React, { Component } from 'react'
import axios from 'axios'
const PersonalityTextSummaries = require('personality-text-summary');

export const { Provider, Consumer } = React.createContext()

export default class ResultsProvider extends Component {
    constructor() {
        super()
        this.state = {
            content: '',
            wordCount: '0',
            responseData: {},
            textSummary: '',
            preloadedProfiles: [],
            preloadedtext: '',
            preloadedPerson: '',
            loading: false
        }
    }

    componentDidMount(){
        axios.get(`https://api.vschool.io/tyler/todo/`).then(response =>{
            console.log(response.data)
            this.setState({
                    preloadedProfiles: response.data
            })
        })
        .catch(err => console.log(err))
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            loading: true
        }) 
        setTimeout(function(){
            console.log("Im working")
            this.setState({
                loading: false
            })
        }.bind(this),3500)
        axios.post("/results", { content: this.state.content }).then(response => {
            console.log(response)
            this.setState({
                responseData: response.data,
                content: ''
            }, () => {
                const v3EnglishTextSummaries = new PersonalityTextSummaries({ locale: 'en', version: 'v3' });
                const textSummary = v3EnglishTextSummaries.getSummary(this.state.responseData);
                this.setState({
                    textSummary
                })
                console.log('The summary for the provided profile is ' + textSummary);
            })
         })
    }

    handlePreload = (e) => {
        e.preventDefault()
        const { name } = e.target
        this.setState({
            preloadedPerson: name,
            content: this.state.preloadedProfiles.filter((e) => e.title === this.state.preloadedPerson).map(e => e.description)
        })
    }


    render() {
        console.log(this.state.loading)
        return (
            <Provider value={{
                handlePreload: this.handlePreload,
                responseData: this.state.responseData,
                handleSubmit: this.handleSubmit,
                handleChange: this.handleChange,
                content: this.state.content,
                textSummary: this.state.textSummary,
                loading: this.state.loading
            }}>
                {
                    this.props.children
                }
            </Provider>
        )
    }
}

export const withResults = C => props => (
    <Consumer>
        {value => <C {...props} {...value} />}
    </Consumer>
)