import React, { Component, Fragment } from 'react'

class Todo extends Component{
    constructor(){
        super()
        this.state = {
            isEditing: false,
            title: '',
            description: ''
        }
    }

    editToggler = () =>{
        console.log(this.state.isEditing)
        this.setState(prevState =>{
            return{
                isEditing: !prevState.isEditing
            }
        })
    }

    handleChange = e => {
        const { name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e =>{
        e.preventDefault()
        const updates = {
            title: this.state.title,
            description: this.state.description
        }
        this.props.handleEdit(this.props.id, updates)
        this.editToggler()
    }
    
    render(){
        return(
            <Fragment>
            { this.state.isEditing ? 
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input  type="text" 
                                value={this.state.title} 
                                onChange={this.handleChange} 
                                name="title"
                                placeholder={this.props.title}/>
                    
                        <input  type="text" 
                                value={this.state.description} 
                                onChange={this.handleChange} 
                                name="description"
                                placeholder={this.props.description}/>
                    </form>
                    <button onClick={this.editToggler}>Close</button>
                    <button onClick={this.handleSubmit}>Submit Edit</button>
                </div>
            : 
            <div>
                <h1>Title: {this.props.title}</h1>
                <h3>Description: {this.props.description}</h3>
                <button onClick={() => this.props.handleDelete(this.props.id)}>Delete</button>
                <button onClick={this.editToggler}>Edit</button>
            </div>
            }
            </Fragment>
        )
    }
    
}

export default Todo