import React from 'react'
import BlogPost from './BlogPost'
import data from './data.json'

const BlogList = () => {
    return(
        <div>
            {
            data.data.map((post, id) =>
            <BlogPost   id = {id}
                        title = {post.title}
                        subTitle ={post.subTitle}
                        postInfo = {post.postInfo} />
            )}
            <div>Older Posts</div>
        </div>
    )
}

export default BlogList