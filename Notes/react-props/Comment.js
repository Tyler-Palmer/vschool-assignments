import React from 'react';
import Profile from './Profile'

const Comment = (props) => {
    // console.log(props)
    const {name, pic} = props.user
    return (
        <div>
            <Profile name={name} image={pic} />

            <div className="text">
                {props.comment}
            </div>
            
            <div className="date">
                {props.date}
            </div>
        </div>
    );
};

export default Comment;