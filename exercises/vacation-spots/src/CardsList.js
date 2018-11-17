import React from 'react'
import Card from './Card'

let vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter"
    },{
      place: "China",
      price: 1200,
      timeToGo: "Fall"
    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer"
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring"
    }
  ]
const CardsList = () => {
    return(
      <div className ="cardlist">
        {
        vacationSpots.map(item =>
              <Card  place = {item.place}
                     price = {item.price}
                     timeToGo = {item.timeToGo}
                     backColor/>
        )}
      </div>
        
    )
}


export default CardsList