import React from 'react'
import ButtonOut from './ButtonOut'

const Nav = () => {
  return (
    <nav className='flex flex-col sm:flex-row justify-between items-center p-2 bg-sky-400 dark:bg-gray-800 dark:text-white'>
       <div className='flex items-center flex-1 justify-between w-full'>
       <h1 className='text-3xl font-bold'>BookFace</h1>
            <div className='flex items-center'>
            <img src='https://picsum.photos/200' className='w-[30px] rounded-[50%] ' alt='profile-pic'></img>
            <h3 className='mx-2 text-lg font-normal'>Ivan Angjelkoski</h3>
            </div>
       </div>
        <div className='flex items-center'>
            <button onClick={ () => {document.body.classList.toggle('dark');document.body.classList.toggle('bg-gray-900') } } className='p-2 mx-2 text-gray-800 dark:text-neutral-200' >Dark Mode</button>
            <ButtonOut className='mx-2'>Sign Out</ButtonOut>
        </div>
    </nav>
  )
}

export default Nav