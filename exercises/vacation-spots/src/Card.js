import React from 'react'

const Card = (props) => {
    let {place, price, timeToGo, backColor} = props
    let dollas = ""
    console.log(timeToGo);
    switch(timeToGo){
        case 'Spring':
            backColor = 'green'
            break;
        case 'Summer':
            backColor = 'red'
            break;
        case 'Fall': 
            backColor = 'orange'
            break;
        case 'Winter':
            backColor = 'blue'
            break;
        default: 
            break;
    }

    if(price < 500){
        dollas = "$"
    }else if(price < 1000){
        dollas = "$$"
    }else{
        dollas = "$$$"
    }
    return (
        <div className="card grow" style={{backgroundColor:backColor}}>
            <h1>{place}</h1>
            <h3>Price: ${price}</h3>
            <h3>When: {timeToGo}</h3>
            <h1>{dollas}</h1>
        </div>
    )
}




export default Card