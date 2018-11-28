import React from 'react'
import axios from 'axios'
import Todo from './Todo'
import TodoForm from './TodoForm'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: [],
            title: '',
            description: ''
        }
    }
componentDidMount(){
    axios.get(`https://api.vschool.io/tyler/todo/`).then(response =>{
        console.log(response.data)
        this.setState({
                todos: response.data
        })
    })
    .catch(err => console.log(err))
}

    handleChange = e => {
        const { name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newTodo = {
            title: this.state.title,
            description: this.state.description
        }
        axios.post('https://api.vschool.io/tyler/todo', newTodo)
            .then(response => {
                this.setState(prevState => {
                    return{
                        todos: [...prevState.todos, response.data],
                        title: '',
                        description: ''
                    }   
                })
            })    
    }

    handleDelete = (id) =>{
        console.log(id)
        axios.delete(`https://api.vschool.io/tyler/todo/${id}`).then(response =>{
            console.log(response)
            this.setState(prevState => {
                return{
                    todos: prevState.todos.filter(todo => todo._id !== id)
                }
            })
        })
    }
    render(){
        return(
            <div>
                <TodoForm   handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            title={this.state.title}
                            description={this.state.description}/>
                {
                    this.state.todos.map((todo) =>
                        <Todo   title = {todo.title}
                                description = {todo.description}
                                key= {todo._id}
                                id= {todo._id} 
                                handleDelete = {this.handleDelete}/>
                    )
                }
            </div>
        )
    }
}

export default App