import React, {Component} from 'react'
import InputForm from './InputForm'
import Badge from './Badge'

class App extends Component {
    constructor (){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            pob: '',
            phone:'',
            favFood:'',
            about:'',
            user: {
                firstName: '',
                lastName: '',
                email: '',
                pob: '',
                phone:'',
                favFood:'',
                about:'',
            }
        }
    }

    handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            pob: this.state.pob,
            phone:this.state.phone,
            favFood:this.state.favFood,
            about: this.state.about
        }

        this.setState({
            user: newUser,
            firstName: '',
            lastName: '',
            email: '',
            pob: '',
            phone:'',
            favFood:'',
            about:''
        })
    }

    render() {
        return(
            <div>
                <InputForm 
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    email={this.state.email}
                    pob={this.state.pob}
                    phone={this.state.phone}
                    favFood={this.state.favFood}
                    about={this.state.about}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} />
                <Badge 
                    firstName={this.state.user.firstName}
                    lastName={this.state.user.lastName}
                    email={this.state.user.email}
                    pob={this.state.user.pob}
                    phone={this.state.user.phone}
                    favFood={this.state.user.favFood}
                    about={this.state.user.about}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}/>

            </div>
        )
    }       
}




export default App