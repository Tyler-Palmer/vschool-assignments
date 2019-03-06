import React from 'react'

const BlogPost = (props) =>{
    const {title, subTitle, postInfo} = props
    return (
        <div className="post">
            <a href="#">
            <h2 className="title">{title}</h2>
            <p className="subTitle">{subTitle}</p>
            </a>
            <p className="postInfo">{postInfo}</p>
            <hr></hr>
        </div>
    )
}

export default BlogPost