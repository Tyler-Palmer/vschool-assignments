import React from 'react'
import BlogPost from './BlogPost'
import data from './data.json'

const BlogList = () => {
    return(
        <div className="mainContainer">
            <div className="mainContent">
                {
                data.data.map((post, id) =>
                <BlogPost   id = {id}
                            title = {post.title}
                            subTitle ={post.subTitle}
                            postInfo = {post.postInfo} />
                )}
            </div>
            <div id="oldPost"><p>Older Posts<span>&nbsp;&nbsp;&rarr;</span></p></div>
        </div>
    )
}

export default BlogList