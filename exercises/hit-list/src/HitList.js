import React from 'react'
import HitTarget from './HitTarget'
import axios from 'axios'

class HitList extends React.Component{
    constructor(){
        super()
        this.state = {
            peopleToKill: []
        }
    }
    
    componentDidMount(){
        axios.get('http://api.vschool.io:6543/hitlist.json').then(response =>{
            console.log(response)
        })
    }

    render(){
        return(
            <div>
                <HitTarget />
            </div>
        )
    }
    
}

export default HitList