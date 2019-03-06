import React from 'react';

const Welcome = (props) => {
    console.log(props)
    return (
        <div id={props.id}>
            <h1>Hello {props.firstName}</h1>
            <h3>Email: {props.email}</h3>
            <h3>Phone: {props.phone}</h3>
        </div>
    );
};

export default Welcome;