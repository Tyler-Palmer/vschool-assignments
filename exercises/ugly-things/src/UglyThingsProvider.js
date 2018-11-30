import React, { Component } from 'react'
import axios from 'axios'

const { Consumer, Provider } = React.createContext()

class UglyThingsProvider extends Component {
    constructor(){
        super()
        this.state = {
            uglyThings: [],
            title: '',
            description: '',
            imgUrl: ''
        }
    }

    getUglyThings = () => {
        axios.get('https://api.vschool.io/tyler/todo/').then(response =>{
            this.setState({
                uglyThings: response.data
            })
        })
        .catch(err => console.log(err))
    }

    handleChange = e =>{
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e =>{
        e.preventDefault()
        const newThing = {
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.imgUrl
        }
        axios.post('https://api.vschool.io/tyler/todo/', newThing)
        .then(response => {
            this.setState(prevState => {
                return{
                    uglyThings: [...prevState.uglyThings, response.data],
                    title:'',
                    description:'',
                    imgUrl:''
                }
            })
        })
        .catch(err => console.log(err))
    }

    handleEdit = (id, newUgly) => {
        axios.put(`https://api.vschool.io/tyler/todo/${id}`, newUgly).then(response => {
            this.setState(prevState => {
                return{
                    uglyThings: prevState.uglyThings.map(thing => thing._id === id ? response.data : thing)
                }
            })
        })
    }

    render(){
        return(
            <Provider value={{
                uglyThings: this.state.uglyThings,
                getUglyThings: this.getUglyThings,
                uglyTitle: this.state.title,
                uglyDescription: this.state.description,
                uglyimgUrl: this.state.imgUrl,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                handleEdit: this.handleEdit
            }}>
                { this.props.children }
            </Provider>
        )
    }
}

export default UglyThingsProvider

export const withUglyThings = C => props => (
    <Consumer>
        { value => <C {...props} {...value}/>}
    </Consumer>
)