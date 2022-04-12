import React from 'react'

const ButtonOut = (props) => {
  return (
    <button className='border-0 dark:text-neutral-200 dark:hover:text-neutral-800 border-gray-100 text-neutral-800 py-2 px-1 sm:py-3 sm:px-2 rounded-xl hover:bg-sky-300  hover:border-sky-300'
    >{props.children}</button>
  )
}

export default ButtonOut