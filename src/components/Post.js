import React from 'react'

const Post = ({post}) => {
  return (
    <div className='flex bg-sky-200 dark:bg-gray-800 dark:text-white rounded-md p-3 m-3 shadow'>
        <div className=''>
            <img src={`https://picsum.photos/200/?random=${ Math.round(Math.random() * 100)}`} className='w-[50px] rounded-[50%] shadow' alt='profile-pic'></img>
        </div>
        <div className='flex-1 px-3'>
            <h3 className='font-bold'>{post.name}</h3>
            <p>{post.post}</p>
        </div>
    </div>
  )
}

export default Post