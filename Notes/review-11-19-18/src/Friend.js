import React from 'react'

const Friend = (props) => {
    
    const logName = () => {
        console.log(props.name)
    }

    return (
        <div onClick={logName}>
            <span>- {props.name}</span>
        </div>
    )
}

export default Friend