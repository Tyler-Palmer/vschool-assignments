import React, { Component } from 'react'
import axios from 'axios'
import TodoForm from './TodoForm'
import Todo from './Todo'

class App extends Component {
    constructor(){
        super()
        this.state = {
            todos: [],
            title: ''
        }
    }

    componentDidMount(){
        axios.get('https://api.vschool.io/bob/todo').then(response => {
            this.setState({
                todos: response.data
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


    handleSubmit = e => {
        e.preventDefault()
        // Create new Todo object from user's input saved in state
        const newTodo = {
            title: this.state.title
        }
        // Send new object to database
        axios.post('https://api.vschool.io/bob/todo', newTodo)
            .then(response => {
                this.setState(prevState => {
                    return {
                        todos: [...prevState.todos, response.data],
                        title: ''
                    }
                })
            })
    }

    handleDelete = (id) => {
        axios.delete(`https://api.vschool.io/bob/todo/${id}`)
            .then(response => {
                // alert(response.data.msg)
                this.setState(prevState => {
                    return {
                        todos: prevState.todos.filter(todo => todo._id !== id)
                    }
                })
            })
    }

    render(){
        return(
            <div>
                <TodoForm 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit}
                    title={this.state.title}
                />

                { this.state.todos.map(todo => 
                    <Todo 
                        title={todo.title} 
                        id={todo._id}
                        handleDelete={this.handleDelete}
                        key={todo._id}/>) 
                }

            </div>
        )
    }
}

export default App