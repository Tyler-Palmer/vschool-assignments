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
        axios.get(`https://s3.amazonaws.com/v-school/data/hitlist.json`).then(response =>{
            this.setState(() =>{
                return{
                    peopleToKill: response.data
                }
            })
        })
    }

    render(){
        console.log(this.state.peopleToKill)
        return(
            <div className="hitList">
                {
                    this.state.peopleToKill.map((person, i) =>
                       <HitTarget   name = {person.name}
                                    image = {person.image}
                                    />
                    )
                }
            </div>
        )
    }
    
}

export default HitList