import React, { useState } from 'react';


const NewPost = ({addPost}) => {
    const [post,setPost] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
        if (post === '') return;
        addPost({
            name:'Ivan Angjelkoski',
            post: post
    })
        setPost('')
    }

  return (
    <div className='flex bg-sky-200 dark:bg-gray-800 dark:text-white rounded-md p-3 m-3 shadow'>
        <div className=''>
            <img src='https://picsum.photos/200' className='w-[50px] rounded-[50%] shadow ' alt='profile-pic'></img>
        </div>
        <div className='flex-1 px-3'>
            <h3 className='font-bold'>Ivan Angjelkoski</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setPost(e.currentTarget.value)} value={post} rows={2} placeholder='New Post' className='dark:bg-gray-900 w-full my-2 rounded resize-none p-2 min-h-1 overflow-auto'>
                
                </input>
                <button type='submit' className='bg-sky-600 float-right py-1 p-2 text-white rounded hover:animate-pulse'>Post</button>
            </form>
        </div>
    </div>
  )
}

export default NewPost