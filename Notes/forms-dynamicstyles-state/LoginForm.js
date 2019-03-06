import React from 'react'

const LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input 
                type="text" 
                name="username" 
                value={props.username} 
                onChange={props.handleChange} 
                placeholder="Username"/>
            <input 
                type="text" 
                name="password" 
                value={props.password} 
                onChange={props.handleChange} 
                placeholder="Password"/>
            <button>Submit</button>
        </form>
    )
}

export default LoginForm