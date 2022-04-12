import React from 'react'
import NewPost from './NewPost'
import Post from './Post'

const Posts = ({posts, addPost}) => {
  return (
    <div className='md:w-[600px] mx-auto'>
        <NewPost addPost={addPost}/>
        <div className='flex flex-col-reverse'>
        {
            posts.map(post => <Post post={post} />)
        }
        </div>
    </div>
  )
}

export default Posts